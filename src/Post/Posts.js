import * as React from 'react'

import('./Posts.css')


class PostComment extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            comments:[],
            next:'',
            total:'',
            lastPage:''
        }
        this.showMore = this.showMore.bind(this);
    }
    componentDidMount() {
        fetch('https://jordan.ashton.fashion/api/goods/30/comments')
            .then(res => res.json())
            .then(body => {
                console.log(body);
                this.setState({
                    comments:body.data,
                    next:body.next_page_url,
                    lastPage:body.last_page,
                    total: body.total,
                })
            })
    }
    showMore() {
        fetch(this.state.next)
            .then(res => res.json())
            .then(body => {
                this.setState({
                    comments: [...this.state.comments, ...body.data],
                    next: body.next_page_url,
                    total: body.total
                })
            })
        }
    render()
{
    let button;
    const {comments} = this.state
    if (this.state.total !== this.state.comments.length) {
        button = <button className={'PostComments__button'} onClick={this.showMore}>Show more</button>
    }
    return (
        <div className={'PostComments'}>
            <div className={'PostComments__title'}>{this.state.comments.length} Responses</div>
            {comments.map((comment) =>
                <div className={'PostComments__column'} key={comment.id}>
                    <div className={'icon'}>{comment.name.charAt(1)}</div>
                    <div className={'PostComments__nametext'}>
                    <div className={'name'}> {comment.name}</div>
                    <div className={'text'}>  {comment.text} </div>
                    </div>
                </div>)}
            {button}
        </div>
    )
}
}
export default PostComment;
