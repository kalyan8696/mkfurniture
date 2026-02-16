document.addEventListener('DOMContentLoaded',function(){
  const welcome=document.getElementById('welcome');
  if(welcome){
    // hide after 2.8s
    setTimeout(()=>{welcome.classList.add('hide');setTimeout(()=>welcome.style.display='none',650)},2800);
    // allow click to dismiss immediately
    welcome.addEventListener('click',()=>{welcome.classList.add('hide');setTimeout(()=>welcome.style.display='none',650)});
  }
  // If on project-detail page, populate details from id
  function qs(key){
    const params=new URLSearchParams(location.search);
    return params.get(key);
  }

  const projects={
    'teak-table':{
      title:'Solid Teak Dining Table',
      img:'https://images.unsplash.com/photo-1549187774-b4e9b0445b56?w=1400&q=80&auto=format&fit=crop',
      desc:'Solid teak table with hand-planed top, mortise-and-tenon legs, natural oil finish. Seats 6-8. Custom sizes available.',
      materials:'Teak wood, natural oil finish',
      size:'200cm x 95cm x 75cm'
    },
    'cabinet':{
      title:'Custom Storage Cabinet',
      img:'https://images.unsplash.com/photo-1616627564539-5a2f3f7f8a1b?w=1400&q=80&auto=format&fit=crop',
      desc:'Floor-to-ceiling storage cabinet with adjustable shelves and soft-close doors. Finished with clear lacquer.',
      materials:'Sheesham/plywood combination, soft-close hardware',
      size:'Custom'
    },
    'lounge-chair':{
      title:'Classic Lounge Chair',
      img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80&auto=format&fit=crop',
      desc:'Ergonomic lounge chair with solid wood frame and hand-stitched leather seat. Comfort-tested design.',
      materials:'Oak frame, leather upholstery',
      size:'Standard lounge dimensions'
    },
    'shelf-unit':{
      title:'Wall Shelf Unit',
      img:'https://images.unsplash.com/photo-1505691723518-36a6c13b4b8b?w=1400&q=80&auto=format&fit=crop',
      desc:'Minimal wall-mounted shelving system with hidden brackets for a floating look.',
      materials:'Walnut veneer on plywood',
      size:'Custom'
    }
    ,
    'coffee-table':{
      title:'Teak Coffee Table',
      img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=80&auto=format&fit=crop',
      desc:'Low teak coffee table with a hand-planed top and tapered legs—perfect for living rooms.',
      materials:'Teak wood, natural oil finish',
      size:'120cm x 60cm x 45cm'
    },
    'wooden-bed':{
      title:'Solid Wood Bed',
      img:'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=1400&q=80&auto=format&fit=crop',
      desc:'Solid-frame bed with slatted base and sturdy mortise-and-tenon joints.',
      materials:'Sheesham / Teak',
      size:'Queen / King custom'
    },
    'sheesham-chair':{
      title:'Sheesham Accent Chair',
      img:'https://images.unsplash.com/photo-1582582494704-7f7f8f5d1b1b?w=1400&q=80&auto=format&fit=crop',
      desc:'Hand-carved Sheesham chair with comfortable curved back and smooth finish.',
      materials:'Sheesham wood, oiled finish',
      size:'Standard'
    },
    'wall-shelf':{
      title:'Custom Wall Shelving',
      img:'https://images.unsplash.com/photo-1505691723518-36a0f17f36c4?w=1400&q=80&auto=format&fit=crop',
      desc:'Custom wall-mounted shelves designed for neat storage and visual appeal.',
      materials:'Plywood with veneer / Solid wood',
      size:'Custom'
    }
    // User-uploaded images (WhatsApp) — generic details provided
    ,
    'whatsapp-image-2026-02-14-9-57-58-pm':{
      title:'Dining Chair Set',
      img:'WhatsApp Image 2026-02-14 at 9.57.58 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-58-pm-1':{
      title:' Teak Sideboard',
      img:'WhatsApp Image 2026-02-14 at 9.57.58 PM (1).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-57-pm':{
      title:'Solid Bedroom',
      img:'WhatsApp Image 2026-02-14 at 9.57.57 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-57-pm-2':{
      title:'Wall Unit',
      img:'WhatsApp Image 2026-02-14 at 9.57.57 PM (2).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-57-pm-1':{
      title:'Console Badroom',
      img:'WhatsApp Image 2026-02-14 at 9.57.57 PM (1).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-56-pm':{
      title:'Entryway Badroom',
      img:'WhatsApp Image 2026-02-14 at 9.57.56 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-56-pm-2':{
      title:'Display Shelf',
      img:'WhatsApp Image 2026-02-14 at 9.57.56 PM (2).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-56-pm-1':{
      title:'Bedroom Wardrobe',
      img:'WhatsApp Image 2026-02-14 at 9.57.56 PM (1).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-55-pm':{
      title:'Study Desk',
      img:'WhatsApp Image 2026-02-14 at 9.57.55 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-55-pm-2':{
      title:' Accent Chair',
      img:'WhatsApp Image 2026-02-14 at 9.57.55 PM (2).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-55-pm-1':{
      title:'Floating Shelves',
      img:'WhatsApp Image 2026-02-14 at 9.57.55 PM (1).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-54-pm':{
      title:' Bed Headboard',
      img:'WhatsApp Image 2026-02-14 at 9.57.54 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-54-pm-2':{
      title:'master bedroom',
      img:'WhatsApp Image 2026-02-14 at 9.57.54 PM (2).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-54-pm-1':{
      title:'Wall Craft',
      img:'WhatsApp Image 2026-02-14 at 9.57.54 PM (1).jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    },
    'whatsapp-image-2026-02-14-9-57-53-pm':{
      title:' TV Unit',
      img:'WhatsApp Image 2026-02-14 at 9.57.53 PM.jpeg',
      desc:'User-uploaded project photo.',
      materials:'Unknown',
      size:'Unknown'
    }
  };

  const id=qs('id');
  if(id && document.getElementById('project-detail')){
    const data=projects[id];
    const container=document.getElementById('project-detail');
    if(!data){
      container.innerHTML='<p>Project not found.</p>';
    } else {
      container.innerHTML=`<article class="detail-hero">\
        <div><img src="${data.img}" alt="${data.title}"></div>\
        <div class="detail-info">\
          <h1>${data.title}</h1>\
          <p class="meta">Materials: ${data.materials} • Size: ${data.size}</p>\
          <p>${data.desc}</p>\
          <p><a class="btn" href="contact.html">Request a Quote</a></p>\
        </div>\
      </article>`;
    }
  }

  // Contact form -> open WhatsApp with prefilled message
  const contactForm = document.getElementById('contact-form') || document.querySelector('.contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = (contactForm.querySelector('input[type="text"]')||{value:''}).value.trim();
      const email = (contactForm.querySelector('input[type="email"]')||{value:''}).value.trim();
      const message = (contactForm.querySelector('textarea')||{value:''}).value.trim();
      const lines = [];
      if(name) lines.push('Name: ' + name);
      if(email) lines.push('Email: ' + email);
      if(message) lines.push('Message: ' + message);
      const text = lines.join('\n');
      const waNumber = '919687504612';
      const url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text || 'Hello%20MKFURNITURE');
      window.open(url, '_blank');
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', ()=>{
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // close when a nav link is clicked
    mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{ if(mainNav.classList.contains('open')) mainNav.classList.remove('open');}));
  }
});
