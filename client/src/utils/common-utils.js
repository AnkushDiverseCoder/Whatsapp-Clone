

export const formatDate = (date)=>{
     const hours = new Date(date).getHours();
     const minutes = new Date(date).getMinutes();
     return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export const downloadMedia = (e, orginialImage)=>{
        e.preventDefault();
        try {
          fetch(orginialImage).then(response=>response.blob()).then(blob=>{
               const url = window.URL.createObjectURL(blob);
               const a = document.createElement('a');
               a.style.display ='none';
               a.href=url;

               const nameSplit = orginialImage.split('/').pop();
              
               a.download= ""+nameSplit +"";
               document.body.appendChild(a);
               a.click();
               window.URL.revokeObjectURL(url);
          }).catch(error=>console.log(error,'error downloading media'));
        } catch (error) {
          console.log(error,'error downloading media')
        }
}