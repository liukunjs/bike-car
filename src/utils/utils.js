/***定义工具库
 ***formateDate定义的是一个初始化事件的函数 
 *** pagination定义分页的方法
 */
export default {
    formateDate(){
            let date = new Date()
      return   date.getFullYear()+" "+(date.getMonth()+1)+" "+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    },
    //data 数据，而callback是下一页的回调函数
    pagination(data,callback){
    	let page= {
    		//onChange事件是切换到第几页去了，current是目标页数
    		onChange:(current)=>{
    			callback(current)
    		},
    		//当前页码
    		current: data.result.page,
    		//每页的条数
    		pageSize: data.result.pages_size,
    		// 总共数据
    		total: data.result.total,
    		//指定当前有多少页
    		showTotal:()=>{
    			return `供${data.result.total}条数据`
    		},
    		//是否快速调转到某一页
    		showQuickJumper:true
    	}
    	return page
    }
}