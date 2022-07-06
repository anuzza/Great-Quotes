import QuoteList from "../components/quotes/QuoteList";
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
const AllQuotes = ()=>{
    return <QuoteList quotes = {DUMMY_QUOTES}/>
}

export default AllQuotes;