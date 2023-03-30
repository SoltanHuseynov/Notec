import { Remarkable } from "remarkable";
const  md=new Remarkable()

function renderMarkdown(markdown){
    const renderHTML=md.render(markdown)
    return {__html:renderHTML}
}

export default function Markdown({markdown}){
    const markup=renderMarkdown(markdown)
    return  <div className="word" dangerouslySetInnerHTML={markup} />
}