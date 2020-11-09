
export const api = (url: string) => {

    const promise = new Promise((resolve, reject) => { 
        const req: XMLHttpRequest | any = new XMLHttpRequest();
        req.open('GET', url);
    
        req.setRequestHeader( 'Access-Control-Allow-Origin', '*');
        req.setRequestHeader( 'Content-Type', 'application/json' );
        
        req.onerror = (XMLHttpRequest: any, textStatus: any, errorThrown: any) => {
              console.log( 'The data failed to load :(' );
              console.log(JSON.stringify(XMLHttpRequest));
        };

        
        req.send();
        
        req.onload = () => {  
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText));
                }
        } 
         
    });
    
    return promise;
}
