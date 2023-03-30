import { Component,useState} from "react";
import data from "../api/data.json"
import "../css/layout.css"
import Markdown from "../MarkdownPreview";


function FetchData(that,path){
    import(`../markdown/${path}`)
    .then(res=>{
        fetch(res.default)
        .then(res=>res.text())
        .then(res=>{that.setState({data:res})})
    })
}

class Layout1 extends Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
        FetchData(this,"develop.md")
    }
    render(){
        return(
            <div className="layout1">
                <div className="div-person-log">
                    <img src={data.Person.image}></img>
                </div>
                <Markdown markdown={this.state.data}></Markdown>
            </div>
        )
    }
}

class Layout2 extends Component{
    constructor(props){
        super(props)
        this.state={
            data:null
        }
        FetchData(this,"about.md")
    }
    render(){
        return(
            <div className="layout2 test">
                <Markdown markdown={this.state.data} ></Markdown>
                <div className="div-about-log">
                    <img src={data.About.logo}/>
                </div>
            </div>
        )
    }
}


class Layout3 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="layout3">
                <div className="div-connect">
                    <h1>Contact  🔗</h1>
                </div>
                <a href="https://github.com/Note-C"><i className="fa-brands fa-github fa-beat"></i></a>
                <a href="https://twitter.com/NotecOfficial"><i className="fa-brands fa-twitter fa-beat" ></i></a>
            </div>
        )
    }
}


export {Layout1,Layout2,Layout3}