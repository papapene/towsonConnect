import React, {Component} from 'react';
import {HeaderTop, HeaderBottom } from '../header/Header';
import FeedContent from '../feed/FeedContent';
import './layout.css';


function ContentSelection(props)
{
    const mainContent=props.content;
    if(mainContent === 0)
    {
        return(
            <FeedContent />
        );
    }
    else
    {
        return(
            <p>{mainContent}</p>
        );
    }
}

class Layout extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            content: 0
        }
        this.handleContent=this.handleContent.bind(this);
    }

    handleContent(page)
    {
        console.log("Called from NavBar");
        this.setState({content: page});
    }

    render()
    {
        return(
            <div className="wrapper">
                <div className='header'>
                    <HeaderTop />
                    <HeaderBottom 
                    selectedItem={this.state.content}
                    onNavigation={this.handleContent}
                    />
                </div>
                <div className='box2'>
                    <ContentSelection 
                    content={this.state.content}/>
                </div>
            </div>
        );
    }

}

export default Layout;