import React,{ useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const CREATE_MESSAGE = gql`
    mutation CreateMessage(
        $title: String!,
        $content: String!,
        $author: String!
    ) {
        createMessage (
            title: $title,
            content: $content,
            author: $author
        ) {
            _id
        }
    }

`;

const MessageForm = () => {

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const [createMessage] = useMutation(CREATE_MESSAGE);

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-title d-flex justify-content-center">
                        <h5 className="mt-3">
                            WRITE YOUR MESSAGE
                        </h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={ async e => {
                            e.preventDefault();
                            await createMessage({ variables: { title, author, content } })
                            window.location.href = "/";
                        }}>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Author"
                                    onChange={ e => setAuthor(e.target.value) }
                                    value={author}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Write a Title"
                                    onChange={ e => setTitle(e.target.value) }
                                    value={title}
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    row="2"
                                    className="form-control"
                                    placeholder="Content..."
                                    onChange={ e => setContent(e.target.value) } 
                                    value={content}
                                ></textarea>
                            </div>

                            <button className="btn btn-success btn-block">Save</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default MessageForm;