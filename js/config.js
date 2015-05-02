/*
  Todo: Make this so that you don't have to know JavaScript.
  Should look like a stylesheet, or MarkDown.
*/
var pages = [
    
    /********************************************/
    /* Stuff that gets loaded on the front page */
    /********************************************/
    {
        template_path: "main-menu.html",
        target: ".globalnav",       //loads main menu into the .globalnav div
        className: "navwrapper cf"
    },
    {
        template_path: "spokes.html",
        target: ".explore_mainnav"  //loads spokes menu into the .explore_mainnav div
    },
    {
        template_path: "help.html",
        target: ".vcenter"          //loads the help menu menu into the .vcenter div
    },
    
    /***********************************************/
    /* Stuff that gets loaded when a new URL loads */
    /***********************************************/
    {
        url: "dream",
        template_path: "spokes-dream.html",
        target: '.explore_mainnav'
    },
    {
        url: "help",
        template_path: "help.html",
        target: '.section-content'
    },
    {
        url: "a-g",
        template_path: "ag-requirements.html",
        target: '.section-content'
    },
    {
        url: "scholarships",
        collection_template_path: "scholarship-list.html",
        item_template_path: "scholarship-item.html",
        target: '.section-content',
        type: "list",
        page_size: 5,
        table_id: 9
    },
    
    {
        url: "colleges",
        collection_template_path: "college-list.html",
        item_template_path: "college-item.html",
        target: '.section-content',
        type: "list",
        page_size: 5,
        table_id: 13
    },
    
    {
        url: "scholarships/:id",
        type: "detail",
        template_path: "scholarship-detail.html",
        target: '.section-content',
        table_id: 9
    },
    
    {
        url: "colleges/:id",
        type: "detail",
        template_path: "college-detail.html",
        target: '.section-content',
        table_id: 13
    },
    
    {
        url: "outside-school",
        template_path: "extra-curriculars.html",
        target: '.section-content'
    },
    {
        url: "profile",
        template_path: "profile.html",
        target: '.section-content'
    },
    {
        url: "test-prep",
        template_path: "test-prep.html",
        target: '.section-content'
    },
    {
        url: "essays",
        template_path: "essays.html",
        target: '.section-content'
    },
    {
    	url: "options",
        template_path: "options.html",
	target: ".section-content"
    },
    {
    	url: "editprofile",
        template_path: "editprofile.html",
        target: '.section-content'
    },
    {
    	url: "ucs",
        template_path: "ucs.html",
        target: '.section-content'
    },
    {
    	url: "cal-states",
        template_path: "cal-states.html",
        target: '.section-content'
    },
    {
    	url: "tech-schools",
        template_path: "tech-schools.html",
        target: '.section-content'
    },
    {
    	url: "private-schools",
        template_path: "private-schools.html",
        target: '.section-content'
    },
    {
    	url: "ccs",
        template_path: "community-colleges.html",
        target: '.section-content'
    }
    
];
