function RPcreateCategories(e,t){function n(){RPsendRequest("POST","categories",{name:o},function(e){"[]"!==JSON.stringify(e)?e.name===o&&(console.log("created new category: "+e.name),s.status=1,s.id=e.id,t(s)):(s.exception=e,t(s))})}var s={status:-1,exception:"",id:""},o=e;RPsendRequest("GET","categories",e="?search="+encodeURIComponent(e),function(e){"[]"!==JSON.stringify(e)?e[0].name===o&&(console.log("this category already exists: "+e[0].name),s.status=0,s.id=e[0].id,t(s)):"[]"===JSON.stringify(e)?n():(s.exception=e,t(s))})}function RPcreatePost(e,t){function n(){if(""!==e.ThumbnailID)n={date:e.Date,status:"publish",title:e.Title,content:e.Content,categories:e.CategoryIDs,featured_media:e.ThumbnailID};else var n={date:e.Date,status:"publish",title:e.Title,content:e.Content,categories:e.CategoryIDs};RPsendRequest("POST","posts",n,function(e){"[]"!==JSON.stringify(e)?e.title.rendered===o&&(console.log("created new post: "+o),s.status=1,s.id=e.id,t(s)):(s.exception=e,t(s))})}var s={status:-1,exception:"",id:""},o=e.Title;postTitle="?search="+encodeURIComponent(e.Title),RPsendRequest("GET","posts",postTitle,function(e){"[]"!==JSON.stringify(e)?e[0].title.rendered===o&&(console.log("this post already exists: "+o),s.status=0,s.id=e[0].id,t(s)):"[]"===JSON.stringify(e)?n():(s.exception=e,t(s))})}function RPsendRequest(e,t,n,s){var o=new XMLHttpRequest;"GET"===e?(o.open(e,magicalData.siteURL+"/wp-json/wp/v2/"+t+n),o.onload=function(){if(o.status>=200&&o.status<400){var e=JSON.parse(o.responseText);s(e)}else s("Connection to the server was succesful, but we recieved an error to our request.")},o.onerror=function(){s("Connection error")},o.send()):"POST"===e&&(o.open(e,magicalData.siteURL+"/wp-json/wp/v2/"+t),o.onload=function(){if(o.status>=200&&o.status<400){var e=JSON.parse(o.responseText);s(e)}else s("Connection to the server was succesful, but we recieved an error to our request.")},o.setRequestHeader("X-WP-Nonce",magicalData.nonce),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.onerror=function(){s("Connection error")},o.send(JSON.stringify(n)))}