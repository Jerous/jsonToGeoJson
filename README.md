# Json to GeoJson

讀取json檔然後轉換成Google Map用的GeoJson

### 資料夾結構

|資料夾/檔案|用途|
|-|-|
|dist|放輸出的js檔|
|data|本地端的json檔|
|index.js|執行程式|

### 怎麼用

```sh
$ node index.js
```

### index.js說明

>var data = require('../jsontogeojson/newTaipeiBike.json');

把要轉換的json讀進來

>var output = `JSON.stringify`(GeoJSON.parse(` 'data.result.records' `, {`Point`: ['lat', 'lng'], `include`: ['sna', 'sarea', 'ar']}));

data.result.records：json資料中要放到geojson的features內容
Point：會轉成geojson的geometry內容，type是point
include：會轉成geojson的properties內容，想放幾個就幾個
JSON.stringify()：處理完的物件在轉換成json格式

>fs.writeFile(`'dist/geoJson.js'`, `'eqfeed_callback(' + output + ')'`, CALLBACK);

dist/geoJson.js：輸出的位置
eqfeed_callback(' + output + ')：output會是json，然後再加上eqfeed_callback()包在最外面組成一個js檔，符合googlemap匯入geojson範例中的格式

### 用到的套件

* node fs : 檔案寫入
* geojson：轉換成geojson

### 參考資料

[geojson](https://www.npmjs.com/package/geojson)

