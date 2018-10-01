public class ExcelDataController { //excel copy&past에서 붙인 엑셀데이터를 가지고 와 파싱하여, 
									//related record로 insert 해주고, data viewer 컴포넌트로 다시 보내줌.
    @AuraEnabled
    public static void parseData(Object alldata){
    	system.debug('stringdata: ' + alldata);
    }
    
    @AuraEnabled
    public static void showData(){
    	
    }
}