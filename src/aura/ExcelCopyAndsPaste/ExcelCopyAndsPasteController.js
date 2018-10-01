({
	init : function(cmp, event, helper){
		alert('we are in init!');
	},
	
	myAction : function(cmp, event, helper) { //근데 왜 convert 버튼 누르기도 전에 여기를 타는걸까
		alert('we are in myAction');
		var stringdata = cmp.get("v.exceldata");
		stringdata = String(stringdata);
		console.log("복붙한 텍스트: " + stringdata);

		var rows = stringdata.split('\n'); //행 기준으로 나눠서 리스트로 저장
		console.log('행 수: '+ rows.length);
		
		var columns = rows[0].split('\t'); //컬럼명들 저장
		console.log('컬럼명: ' + columns);
		var colnum = columns.length;
		
		const m = new Map();
		var alldata = new Array();
		
		for(var i = 0; i<rows.length; i++){ //모든 row를 rows라는 리스트로 저장
			console.log(i+'행: ' + rows[i]);
			m[String(i)] = rows[i];
			var rowdata = rows[i].split('\t'); //arraylist
			console.log('>>>>>map['+ i+']: ' + m[String(i)]);
			console.log('>>>>>m.values(): '+ m.values());
			
/*			for(var j =0; j<rowdata.length; j++){
				alldata.push(rowdata[j]);
				console.log('this is single cell adding up: ' +alldata);
			}*/
			for (const v of m.values()) {
				console.log('values: '+ v);
			}
		}

			
/*		var action = cmp.get('c.parseData');
		action.setParams({
			alldata : alldata
		});*/
		
		var action = cmp.get('c.parseData1');
		action.setParams({
			rowsmap : m
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