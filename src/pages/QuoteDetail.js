import { Link, Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES=[
    {
        id: 'q1',
        author: 'Jones',
        text: 'Learning react is fun!'
    
    },
    {
        id: 'q2',
        author: 'David',
        text: 'Learning React is Great!'
    },
];

const QuoteDetail = ()=>{
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote=> quote.id=== params.quoteId)
    if(!quote){
        return <p>No quote found!</p>;
    }

    return <section>
        <HighlightedQuote text = {quote.text} author= {quote.author} />
        <Route path = {`/quotes/${params.quoteId}`} exact>
            <div className="centered">
            <Link className="btn--flat" to = {`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
        </Route>
        
        <Route path = {`/quotes/${params.quoteId}/comments`}>
            <Comments/>
        </Route>
        
    </section>
    
}

export default QuoteDetail;