({
	myAction : function(cmp, event, helper) {
		var stringdata = cmp.get("v.exceldata");
		console.log("current text: " + stringdata);
		stringdata = String(stringdata);
		var objects = [];
		var rows = stringdata.split('\n'); //총 몇줄인가요
		console.log('rows[0]: ' + rows[0]);
		
		var columns = rows[0].split('\t'); //컬럼수는 여기서 확정. 
		console.log('all columns: ' + columns);
		
		for(var i = 0; i<rows.length; i++){ //모든 row를 rows라는 리스트로 저장
			console.log('rows'+i + rows[i]);
		}
			
					//컬럼명 제하기 위해 1부터 시작
			for(var rownum = 1; rownum < rows.length; rownum++){
				var o = {}; //빈배열
				var data = rows[rownum].split('\t'); //1~x 번째 줄을 셀값별로 쪼갠다. data=한줄에 담긴 데이터
				console.log('how many loops? ' + data.length); //correct
				
/*
맵쓰는부분 WarehouseCalloutService 참고하기
map<Integer, Object> mapRows = new map<Integer, Object>();
*/

				for(var cellnum = 0; cellnum < data.length; cellnum++){ //0~4
					console.log(cellnum+'번째 컬럼 이름'+columns[cellnum]);
					console.log('rownum: ' + rownum); //map에서 아이디 rownum으로, 나머지 data는 object로 묶기
					console.log(cellnum+'번째 셀값 이름'+data[cellnum]);
					/*o[columns[cellnum] = data[cellnum]]; --> this fucked me up!*/
				}
				console.log('this is o: ' + JSON.stringify(o));
				objects.push(o);
			}
			return objects;
	}
})