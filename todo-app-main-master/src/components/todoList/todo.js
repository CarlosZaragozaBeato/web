
import Cross from '../../images/icon-cross.svg'

const Todo = ({data,setCard,todoArr,checkedPrp})=>{

    const deleteHandler = ()=>{
        setCard(todoArr.filter((el) => el.id !== data.id));
    }   
    const completedFnct = ()=>{
        setCard(todoArr.map((item)=>{
            if(item.id===data.id){
                return{
                    ...item, completed: !item.completed,
                            active: !item.active
                }
            }
            return item;
        }));   
    }

    return(

        <div className={`card ${checkedPrp?"cardCompleted":""}`}>
            <div className="frstPart">
                <label htmlFor="completed" className="labelCompleted">
                <input type="checkbox" name="completed" className="checkCompleted" checked={checkedPrp?"checked":""} onClick={()=>completedFnct()}  />
                </label>
                <p className="texto">{data.text}</p>
            </div>
           
             <figure className="figureCross">
                 <img src={Cross} alt="cross icon" className="imgCross" onClick={()=>deleteHandler()} />
             </figure>
        </div>

    );

}
export default Todo;