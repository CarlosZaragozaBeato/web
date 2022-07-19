
import  './todoList.css'
import Todo from './Todo'

const TodoList = ({modeCard,todoArr,setCard,setOpcion,options,count})=>{

const renders=()=>{
    switch(options){
        case 0:
            return (todoArr.map(items=>(
                <Todo 
                    data={items}
                    key={items.id}
                    setCard={setCard}
                    todoArr={todoArr}
                    checkedPrp={items.completed}
                    />
            )))
        case 1:
            return (todoArr.map(items=>items.completed===true?(
                <Todo 
                    data={items}
                    key={items.id}
                    setCard={setCard}
                    todoArr={todoArr}
                    checkedPrp={items.completed}
                    />
            ):""))
        case 2:
               return (todoArr.map(items=>items.active===true?(
                <Todo 
                    data={items}
                    key={items.id}
                    setCard={setCard}
                    todoArr={todoArr}               
                    />
            ):""))
    }
}
const clearCompleted = ()=>{
     setCard(todoArr.filter(item => item.completed!==true))
}
    return(
        <main className={`main ${modeCard?"cardDarkBg":"cardlightBg"}`}>   
          {
              todoArr.length===0    ? (
                <div className="empty">
                    <h2>
                        0 items in the list
                    </h2>
                </div>
              ): renders()
            }
            <div className={`infoTodos ${modeCard?"cardDarkBg":""}`}>
                <p className="itemsLeft">{count} items left</p>
                <div className="listOrder">
                    <button onClick={()=>setOpcion(0)} className={`${options===0?"activeButton":""}`}>All</button>
                    <button onClick={()=>setOpcion(2)} className={`${options===2?"activeButton":""}`}>Active</button>
                    <button onClick={()=>setOpcion(1)} className={`${options===1?"activeButton":""}`}>Completed</button>
                </div>
                <button className="clearBtn" onClick={()=>clearCompleted()}>
                    Clear Completed
                </button>
            </div>  
            <p className="drag">No Drag and drop to reorder list.</p>  
        </main>
    );  
}
export default TodoList;