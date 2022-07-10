import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import {addQuote} from '../lib/api';
import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";

const NewQuote = ()=>{
    const {sendRequest, status}= useHttp(addQuote);
    console.log(status)
    const history = useHistory();

    useEffect(()=>{       
        if(status === 'completed'){
            history.push('/quotes');
        }   
    }, [status, history]);

    const addQuoteHandler = (quoteData) =>{
     sendRequest(quoteData);   
    };

    return (<QuoteForm isLoading ={status==='pending'} onAddQuote={addQuoteHandler}/>);


    
}  
export default NewQuote;