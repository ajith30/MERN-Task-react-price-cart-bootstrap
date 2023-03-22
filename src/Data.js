const data = {
  free:{
    type: "FREE",
    price: "0",
    details: [
      {text:"Single User", checked: true, decoration: false},
      {text:"5GB Storage", checked: true, decoration: false},
      {text:"Unlimited Public Projects", checked: true, decoration: false},
      {text:"Community Access", checked: true, decoration: false},
      {text:"Unlimited Private Projects", checked: false, decoration: true},
      {text:"Dedicated Phone Support", checked: false, decoration: true},
      {text:"Free Subdomain", checked: false, decoration: true},
      {text:"Monthly Status Reports", checked: false, decoration: true},
    ]
  },

  plus:{
    type: "PLUS",
    price: "9",
    details: [
      {text:"5 Users", checked: true, decoration: false},
      {text:"50GB Storage", checked: true, decoration: false},
      {text:"Unlimited Public Projects", checked: true, decoration: false},
      {text:"Community Access", checked: true, decoration: false},
      {text:"Unlimited Private Projects", checked: true, decoration: false},
      {text:"Dedicated Phone Support", checked: true, decoration: false},
      {text:"Free Subdomain", checked: true, decoration: false},
      {text:"Monthly Status Reports", checked: false, decoration: true},
    ]
  },

  pro:{
    type: "PRO",
    price: "49",
    details: [
      {text:"Unlimited Users", checked: true, decoration: false },
      {text:"150GB Storage", checked: true, decoration: false},
      {text:"Unlimited Public Projects", checked: true, decoration: false},
      {text:"Community Access", checked: true, decoration: false},
      {text:"Unlimited Private Projects", checked: false, decoration: false},
      {text:"Dedicated Phone Support", checked: false, decoration: false},
      {text:"Unlimited Free Subdomains", checked: false, decoration: false},
      {text:"Monthly Status Reports", checked: false, decoration: false},
    ]
  }
};

export default data;
