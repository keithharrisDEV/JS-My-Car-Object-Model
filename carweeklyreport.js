let car = {
    
    make: "Nissan",
    model: "Sentra",
    year: 2019,
    type: "Sedan",
    dealership: "Vehicled purchased at: RI-Dealers",
    color: "Red",
    mileage: 0,
    cylinder: 6,
    totalSeating: 4,
    trim: "Base Model",
    purchaseDate: "11-18-2018",
    vehicleCost: 25000,
    sportsPackage: false,
    engineCylinders: 6,
    checkEngine: false,
    autoStart: true,
    xmsRadio: false,
    checkOil: false,
    OilFull: true,
    vin: "1HGBH41JXMN109186",
    milesDriven: [25, 15, 18, 20, 100, 25, 87],
    
    autoStat: function()
    {
        if (this.autoStart == true)
        {
            return ("INCLUDED");
            
        }
        else
        {
            return ("NOT INCLUDED");
        }
    }
    ,
    satRadio: function()
    {
        if (this.xmsRadio == true)
        {
            return ("INCLUDED");
            
        }
        else
        {
            return ("NOT INCLUDED");
        }
    }
    ,
    gpsEquipped: function ()
    {
        if(this.sportsPackage == true)
        {
            return ("INCLUDED");
        }
        else
        {
            return ("NOT INCLUDED");
        }
    }
    ,
    checkEngLight: function ()
    {
        if(this.checkEngine == true)
        {
            return("ENGINE needs to be serviced! Schedule for service soon");
        }
        else
        {
            return("No CHECK ENGNE issues at this time");
            
        }
        
    }
    ,
    checkOilLight: function()
    {
        if(this.OilFull == false)
        {
            return ("Engine oil level is at: ", this.OilFull);
        }
        else
        {
            return ("Check your oil as it is low at this time. Schedule a service visit today");
        }
    }
    ,
    conversionSpacing: function()
    {
        console.log ("___________________________________________________________________________________________________________");
        console.log("");
        
    }
    ,
    daysDrivenAfterPurchase: function ()
    {
        for (var i = 0; i < this.milesDriven.length; i++)
        {
            console.log("Day: ", i+1, "", this.milesDriven[i], "miles");
        }
    }
    ,
    carPayment: function()
    {
        var vehicleCarPayment = this.vehicleCost / 48;
        return vehicleCarPayment
        
    }
};


console.log("Weekly Vehicle Statistics Report for your vehicle");
console.log("Purchase Date: ", car.purchaseDate);
console.log(car.dealership);
car.conversionSpacing();
console.log("Make: ", car.make);
console.log("Model: ", car.model);
console.log("Year: ", car.year);
car.conversionSpacing();
console.log("Vin #: ", car.vin);
console.log("Type: ", car.type);
console.log("Color: ", car.color);
console.log("Total Seats: ", car.totalSeating);
console.log("Trim Type: ", car.trim);
console.log("Cylinders: ", car.cylinder);
car.conversionSpacing();
console.log("Remote Start: ", car.autoStat());
console.log("XMS Radio: ", car.satRadio());
console.log("GPS: ", car.gpsEquipped());
car.conversionSpacing();
console.log("Vehicle Cost: ", car.vehicleCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log("Monthly Payment: ", car.carPayment().toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log("Monthly payment is based off a 48 year period");
car.conversionSpacing();
console.log("Mileage: ", car.mileage, "miles as of 11-18-2018");
console.log("Days driven after purchase: ");
console.log("");
console.log(car.daysDrivenAfterPurchase());
car.conversionSpacing();
console.log(car.checkEngLight());
console.log(car.checkOilLight());




