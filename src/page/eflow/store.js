/**
 * Created by zhangxiao
 */
import {Store, stateKey} from "react-eflow";
 
class AA extends Store {
  constructor(options) {
    super(options);
    this.initState({
      astring:'init string',
      obj:{'empty':'obj'},
      arr:[]
    });
  }
  @stateKey("astring")
  strFun() {
		const dispatch = this.dispatch;
	 
    dispatch(" new string from store" + new Date())
      
  }
 
  @stateKey("obj")
  objFun() {
		const dispatch = this.dispatch;
	 
			dispatch({newKey:'newVal'})

  }

  @stateKey("arr")
  arrFun() {
		const dispatch = this.dispatch;
	 
			dispatch([1,2,3])

  }

}
export default new AA();
