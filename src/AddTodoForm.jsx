
export default function AddTodoForm(){
    return (
        <form>
        <input id="todoTitle"/>
        <label htmlFor="todoTitle">Enter Todo List</label>
        <button type="submit">Add Todo</button>
        </form>
    );
}