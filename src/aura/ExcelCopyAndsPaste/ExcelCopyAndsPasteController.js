({
	init : function(cmp, event, helper){
		console.log('we are in init!');
	},
	
	myAction : function(cmp, event, helper) {
		var stringdata = cmp.get("v.exceldata");
		console.log("current text: " + stringdata);
		stringdata = String(stringdata);
		var rows = stringdata.split('\n'); //총 몇줄인가요
		console.log('rows[0]: ' + rows[0]);
		
		var columns = rows[0].split('\t'); //컬럼수는 여기서 확정. 
		console.log('all columns: ' + columns);
		
		for(var i = 0; i<rows.length; i++){ //모든 row를 rows라는 리스트로 저장
			console.log('rows'+i + rows[i]);
		}
			
					//컬럼명 제하기 위해 1부터 시작
			for(var rownum = 0; rownum < rows.length; rownum++){
				var alldata = {};
				var data = rows[rownum].split('\t'); //1~x 번째 줄을 셀값별로 쪼갠다. data=한줄에 담긴 데이터
				console.log('how many loops? ' + data.length); //컬럼갯수와 같은 넘버가 나온다 --->correct
				alldata.add(data); //이렇게 하면 모든 셁값들이 그냥 좌르륵 저장되는것 
				alert('this is row:' + row);
				
				/*
				ExcelDataController controller = new ExcelDataController();
				controller.parseData(alldata);
				*/
				
				for(var cellnum = 0; cellnum < data.length; cellnum++){ //0~4
					console.log(cellnum+'번째 컬럼 이름'+columns[cellnum]);
					console.log('rownum: ' + rownum); //map에서 아이디 rownum으로, 나머지 data는 object로 묶기
					console.log(cellnum+'번째 셀값 이름'+data[cellnum]);
				}
			}
			
			var action = cmp.get('c.parseData');
			action.setParams({
				alldata : cmp.get('v.exceldata')
			});
			action.setCallback(this, function(response){
				var state = response.getState();
				if(state == 'SUCCESS'){
					console.log(state);
				}else{
					var errors = response.getError();
					console.log('error : ' + errors[0].messag)
				}
			});
			$A.enqueueAction(action);
	}

/*
맵쓰는부분 WarehouseCalloutService 참고하기
map<Integer, Object> mapRows = new map<Integer, Object>();

이쪽 컨트롤러에서는 엑셀복붙해서 받은 데이터를
n,t태그 기준으로 쪼개서 오브젝트로는 저장 가능하다
그런데, apex컨트롤러로 무엇을 넘겨줘야할까?
결국 하나의 '테이블'의 형태가 레코드로 저장되어야하는데
테이블의 항복들을 필드화 하여 저장?

apex controller에서 할일:
child object인 <엑셀변환 문서>로
data넘겨서 insert하기-->하나의 레코드 생성
어떤 형식의 레코드로 저장해야할까
*/
})