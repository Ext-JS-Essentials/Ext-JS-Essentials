// sencha generate model Message userId:int,Message:string,Date:date
Ext.define('BizDash.model.Message', {
    extend: 'BizDash.model.Base',
    
    fields: [
        { name: 'userId', type: 'int' },
        { name: 'Message', type: 'string' },
        { name: 'Date', type: 'date' }

    ]
});
