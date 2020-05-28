
export const DateDiff = {
    inDays: function(date1:Date, date2:Date) {

        // console.log(date1, date2);
        var time2 = new Date(date2).getTime();
        var time1 = new Date(date1).getTime();

        return (time2.valueOf()-time1.valueOf())/(24*3600*1000);
    },

    inWeeks: function(date1:Date, date2:Date) {
        var time2 = new Date(date2).getTime();
        var time1 = new Date(date1).getTime();

        return (time2-time1)/(24*3600*1000*7);
    },

    inMonths: function(date1:Date, date2:Date) {
        var date2 = new Date(date2);
        var date1 = new Date(date1);

        var date1Year = date1.getFullYear();
        var date2Year = date2.getFullYear();
        var date1Month = date1.getMonth();
        var date2Month = date2.getMonth();

        return (date2Month+12*date2Year)-(date1Month+12*date1Year);
    },

    inYears: function(date1:Date, date2:Date) {
        var date2 = new Date(date2);
        var date1 = new Date(date1);
        
        return date2.getFullYear()-date1.getFullYear();
    }
};