import React from 'react';
import './ListItem.css';

const ListItem = ({ sectionName, webUrl, webTitle, imageUrl, type,webPublicationDate  }) => {
  const openNew =(webUrl)=>{
    window.open(webUrl, "_blank")
  }
  return (
    <div class="list-item-container" onClick={()=>openNew(webUrl)}>
      <div className="left">
        <img src={imageUrl} className="thumbnail" alt="news" />
      </div>
      <div className="center">
        <h4>{webTitle}</h4>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex', }}>
          <p style={{border:'1px solid green', borderRadius:'5px', marginRight:'2px'}}>{sectionName}</p>
          <p style={{border:'1px solid green', borderRadius:'5px'}}>{type}</p>
          </div>
          <div>
          <p style={{border:'1px solid green', borderRadius:'5px'}}>{webPublicationDate}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <p>&#8250;</p>
      </div>
    </div>
   
  );
};

export default ListItem;