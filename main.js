const links = document.querySelectorAll('nav a');
const divs = document.querySelectorAll('div');

links.forEach(link => {
  link.addEventListener('click', event =>{

    links.forEach(link1=> {
       link1.className = '';
       if ( link.id == link1.id)  {
        link.className = 'active';
       }
     });

   divs.forEach(div=> {
      div.className = '';
      if (div.id == 'home-page' && link.id == 'home-link')  {
        div.className = 'show';
        
      }
      if (div.id == 'about-page' && link.id == 'about-link')  {
        div.className = 'show';
        
      }
      if (div.id == 'service-page' && link.id == 'services-link')  {
        div.className = 'show';
    
      }
      if (div.id == 'portfolio-page' && link.id == 'portfolio-link')  {
        div.className = 'show';
    
      }
      if (div.id == 'contacs-page' && link.id == 'contacts-link')  {
        div.className = 'show';
    
      }
    });
  });
});