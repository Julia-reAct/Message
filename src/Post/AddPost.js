import * as React from 'react'
import axios from 'axios'
import './AddPost.css';



class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        text:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
        [event.target.name]:event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        async function postMessage(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            return await response.json();
        }

        postMessage('https://jordan.ashton.fashion/api/goods/30/comments',this.state )
            .then((data) => {
                console.log(data);
            });
        alert('You send message!')
    }
    render(){
        return (
            <div className="AddPost">
                <header className="AddPost-header">
                    <div className='AddPost-header__title'>Comments</div>
                    <div className='AddPost-header__column'>
                        <form className='AddPost-header__form' onSubmit={this.handleSubmit}>
                            <input className='AddPost-header__name' type="text" placeholder="Name"
                                   required minLength="1" maxLength="10"
                                   name='name' value={this.state.name}  onChange={this.handleChange}/>
                            <textarea className='AddPost-header__text' placeholder="Comments"
                                      required minLength="1" type="text"
                                      name='text' value={this.state.text}  onChange={this.handleChange}/>
                                      <div className={'AddPost-header__button'}>
                            <button type='submit' className='button'>Post</button>
                                      </div>
                        </form>
                    </div>
                </header>
            </div>
        )}
}

export default AddPost;

/*axios.post('https://jordan.ashton.fashion/api/goods/30/comments',
            this.state)
            .then(response=>{
               console.log(response)
            })
        alert('You send message!')
        */