public class ExcelDataController { //excel copy&past에서 붙인 엑셀데이터를 가지고 와 파싱하여, 
									//related record로 insert 해주고, data viewer 컴포넌트로 다시 보내줌.
    @AuraEnabled
    public static void parseData(List<String> alldata){
    	System.debug('this is alldata[0]~[3]'+alldata[0]+alldata[1]+alldata[2]+alldata[3]);
    	System.debug('this is size of alldata: ' + alldata.size());
    	for(integer i=0; i<alldata.size(); i++){
    		System.debug('newlist['+i+']: ' + alldata.get(i)); //successful! 
    	}
    }
    @AuraEnabled
    public static void parseData1(Map<String,List<String>> rowsmap){
    	System.debug('we are in parseData1');
    }
    @AuraEnabled
    public static void showData(){
    	
    }
}