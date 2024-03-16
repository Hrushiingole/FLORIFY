import React from 'react'
import { useEffect } from 'react'
export default function ChatBot() {

    useEffect(()=>{
        const script = document.createElement('script');
    script.async = true;
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    document.body.appendChild(script);

    script.onload = () => {
        window.botpressWebChat.init({
          botId: 'fb449527-d2ea-4343-ac88-d196d2c44c1b',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: '<clientID>',
        })
      }

    return () => {
      document.body.removeChild(script);
      
    }
    },[])
    // window.botpressWebChat.init({
    //     "composerPlaceholder": "Chat with bot",
    //     "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
    //     "botId": "fb449527-d2ea-4343-ac88-d196d2c44c1b",
    //     "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    //     "messagingUrl": "https://messaging.botpress.cloud",
    //     "clientId": "fb449527-d2ea-4343-ac88-d196d2c44c1b",
    //     "webhookId": "cdbf4c45-8641-4b08-946f-feda3427e715",
    //     "lazySocket": true,
    //     "themeName": "prism",
    //     "frontendVersion": "v1",
    //     "showPoweredBy": true,
    //     "theme": "prism",
    //     "themeColor": "#2563eb"
    // });


  return (<>

  <div class="container">
<div class="card card-1">
 <h2>Basic</h2>
 <h3><span class="rup3">&#8377;</span>0 <span>day.</span></h3>
 <p>Trial</p>
 <ul>
   <li class="aval">Best suited plant</li>
   <li class="aval">1 account</li>
   <li class="aval">Maintaince Guide</li>
   <li class="unaval">24/7 support</li>
 </ul>
 <button class="select">Choose this plan</button>
</div>
<div class="card card-2 hot-badge">
 <h2>Standard</h2>
 <h3><span class="rup2">&#8377;</span>49 <span>/15days.</span></h3>
 <p>Suitable for Home</p>
 <ul>
   <li class="aval">Best suited plant</li>
   <li class="aval">2 accounts</li>
   <li class="aval">Maintaince Guide</li>
   <li class="unaval">24/7 support</li>
 </ul>
 <button class="select">Choose this plan</button>
</div>
<div class="card card-3">
 <h2>Premium</h2>
 <h3><span class="rup">&#8377;</span>99 <span>/mo.</span></h3>
 <p>Suitable for big plan</p>
 <ul>
   <li class="aval">Best Suited Plant</li>
   <li class="aval">3 accounts</li>
   <li class="aval">Maintaince Guide</li>
   <li class="aval">24/7 support</li>
 </ul>
 <button class="select">Choose this plan</button>
</div>
</div>

</>
  )
}
