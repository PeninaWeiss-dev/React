import  { useEffect } from "react"


export default function({pageTitle}) {
    useEffect(() => {
        document.title = `${pageTitle}`;
    }, [pageTitle]);  
}