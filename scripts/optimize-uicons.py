import re,json
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.pens.recordingPen import RecordingPen
Path('.codex_tmp').mkdir(exist_ok=True)
root=Path('src');used=set()
for p in root.rglob('*'):
 if p.suffix in ['.ts','.tsx','.css'] and 'uicons-subset' not in p.name:
  used.update(re.findall(r'fi-(?:rr|sr|ss|br|brands)-[a-z0-9]+(?:-[a-z0-9]+)*',p.read_text(encoding='utf-8-sig')))
families=['regular/rounded','solid/rounded','solid/straight','bold/rounded','brands/all'];out=Path('src/assets/fonts');out.mkdir(exist_ok=True)
css=['/* UIcons by Flaticon. Generated subset: same glyphs/outlines as the installed fonts. */'];report=[];found=set()
for family in families:
 source=Path('node_modules/@flaticon/flaticon-uicons/css')/(family+'.css');text=source.read_text();rules=re.findall(r'([^{}]+)\{([^{}]*)\}',text)
 face=next(body for selector,body in rules if selector.strip().endswith('@font-face'))
 fontpath=(source.parent/re.search(r'url\(([^)]+\.woff2)\)',face)[1]).resolve()
 codes=set();keep=[]
 for selector,body in rules:
  names=set(re.findall(r'fi-(?:rr|sr|ss|br|brands)-[a-z0-9]+(?:-[a-z0-9]+)*',selector))
  if '@font-face' in selector:continue
  if names and not names.intersection(used):continue
  if names:
   found.update(names.intersection(used));value=re.search(r'content:\s*[\"\']\\([a-fA-F0-9]+)',body)
   if value:codes.add(int(value[1],16))
  keep.append(selector.strip()+'{'+body+'}')
 original=TTFont(fontpath);font=TTFont(fontpath);font.recalcTimestamp=False; font.recalcBBoxes=False
 opts=subset.Options();opts.flavor='woff2';opts.recalc_timestamp=False;opts.recalc_bounds=False
 sub=subset.Subsetter(options=opts);sub.populate(unicodes=codes);sub.subset(font)
 target=out/('uicons-'+family.replace('/','-')+'-subset.woff2');font.flavor='woff2';font.save(target)
 check=TTFont(target)
 for code in codes:
  a=original.getBestCmap()[code];b=check.getBestCmap()[code];pa=RecordingPen();pb=RecordingPen();original.getGlyphSet()[a].draw(pa);check.getGlyphSet()[b].draw(pb)
  assert pa.value==pb.value and original['hmtx'][a]==check['hmtx'][b],(family,code)
 face=re.sub(r'src:[^;]+;',f'src:url(../assets/fonts/{target.name}) format("woff2");',face)
 css.append('@font-face{'+face+'}');css.extend(keep)
 report.append({'family':family,'glyphs':len(codes),'before':fontpath.stat().st_size,'after':target.stat().st_size,'verified':'outlines and advance widths identical'})
Path('src/styles/uicons-subset.css').write_text('\n'.join(css)+'\n',encoding='utf-8')
p=Path('src/styles/global.css');s=p.read_text(encoding='utf-8-sig');s=re.sub(r"@import '@flaticon/flaticon-uicons/css/[^']+';\n",'',s);s=s.replace("@import 'tailwindcss';","@import 'tailwindcss';\n@import './uicons-subset.css';");p.write_text(s,encoding='utf-8')
Path('.codex_tmp/icon-optimization.json').write_text(json.dumps({'fonts':report,'unmatched':sorted(used-found),'cssBytes':Path('src/styles/uicons-subset.css').stat().st_size},indent=2));print(json.dumps(report,indent=2));print('Unmatched',sorted(used-found))


