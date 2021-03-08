# settings.py
DOMAIN = {
    'people':{
        'schema':{
        'name':{
            'type': 'string',
            'minlength': 1,
            'maxlength': 20,
            },
        'address':{
            'type': 'string',
            'minlength': 1,
            'maxlength': 50,
    },
        'birthday':{
            'type':'string',
            'minlength':1,
            'maxlength':15,
            },
        'book':{
            'type': 'string',
            'minlength': 1,
            'maxlength': 30,
            },
        'music':{
            'type':'string',
            'minlength':1,
            'maxlength':20,
        },
        },
    },

}
RESOURCE_METHODS = ['GET', 'POST']
ITEM_METHODS = ['GET', 'PATCH', 'PUT', 'DELETE']
X_DOMAINS = '*'
