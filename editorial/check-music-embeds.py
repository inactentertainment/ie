import json,urllib.request,concurrent.futures
from pathlib import Path
tracks=json.loads(Path('output/editorial/music-favorites.json').read_text())
def check(t):
 ids=[t['videoId']]+t['alternates'];checked=[]
 for vid in ids:
  try:
   u='https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+vid+'&format=json'
   with urllib.request.urlopen(u,timeout=20) as r:d=json.load(r)
   checked.append({'videoId':vid,'title':d['title'],'publisher':d['author_name'],'embedReturned':bool(d.get('html'))})
  except Exception as e:checked.append({'videoId':vid,'error':str(e)})
 return {'genre':t['genre'],'sources':checked}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
 results=list(pool.map(check,tracks))
Path('output/editorial/music-embed-check.json').write_text(json.dumps(results,indent=2))
for item in results:print(item['genre'],[(x['videoId'],x.get('publisher',x.get('error'))) for x in item['sources']],flush=True)
