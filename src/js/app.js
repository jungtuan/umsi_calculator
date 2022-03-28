(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var form = document.querySelector('#footprint')
  
    if(!form){
        return null;
    }

    form.addEventListener('submit', function (event) {
        
        form.checkValidity();
        event.preventDefault();
        event.stopPropagation();

        var spinner = document.querySelector("#spinner");
        if(spinner){
            spinner.closest('button').setAttribute("disabled", true);
            spinner.classList.remove("d-none");
            spinner.classList.add("d-inline-flex");
        }

        form.classList.add('was-validated');

        var formData = new FormData(form);

        /**
         * Appending Defaults for CoolClimate API
         *  - Sector 27 (Retail) is appropriate for small businesses
         *  - Location 1309 is Washtenaw County, MI
         */
        formData.append('sector_id', 27);
        formData.append('location_id', 1309);

        var defaultsEndpoint = new URL("https://coolclimate.org/business-calculator/stage/api/calculator/defaults");

        for(var pair of formData.entries()){
        
            if(pair[0] == 'electricity'){
                continue;
            }
            defaultsEndpoint.searchParams.append(pair[0], pair[1]);
        
        }

        /**
         * We fetch the default footprint parameters for a small business in
         * Washtenaw County, MI with the provided Annual Revenue, Number of
         * Employees, Number of Store Visitors, and Facilities Size (sqft)
         */
        var defaults = fetch(defaultsEndpoint, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(defaultParameters => {
            
            

            defaultParameters.electricity = Number.parseInt(formData.get('electricity'));

            defaultParameters.naturalGas = Number.parseInt(formData.get('naturalGas'));

            defaultParameters.otherFuel = Number.parseInt(formData.get('otherFuel'));

            defaultParameters.electronics = Number.parseInt(formData.get('electronics'));

            defaultParameters.solidWaste = Number.parseInt(formData.get('solidWaste'));

            defaultParameters.recycling = Number.parseInt(formData.get('recycling'));

            console.info(defaultParameters);

            var computeEndpoint = new URL("https://coolclimate.org/business-calculator/stage/api/calculator/compute");

            /**
             * We call the `compute` endpoint with the defaults information
             * that the CoolClimate API returned in the previous request.
             */
            var footprint = fetch(computeEndpoint, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(defaultParameters)
            }).then(response => response.json()).then(calculatedFootprint => {

                /**
                 * This data variable in this function is the footprint data
                 * provided by CoolClimate API. The units are in mT CO2e.
                 */
                console.info(calculatedFootprint);


                /** Set the Values */
                var totalCarbon = document.querySelector("#total-carbon");
                if(totalCarbon){
                    totalCarbon.innerText = calculatedFootprint.totalEmissions ? Math.round(calculatedFootprint.totalEmissions*100)/100 : 0;
                }

                var facilitiesCarbon = document.querySelector("#facilities-carbon");
                if(facilitiesCarbon){
                    facilitiesCarbon.innerText = calculatedFootprint.facilitiesEmissions ? Math.round(calculatedFootprint.facilitiesEmissions*100)/100 : 0;
                }

                var electricityCarbon = document.querySelector("#electricity-carbon");
                if(electricityCarbon){
                    electricityCarbon.innerText = calculatedFootprint.electricity ? Math.round(calculatedFootprint.electricity*100)/100 : 0;
                }

                var naturalGasCarbon = document.querySelector("#naturalGas-carbon");
                if(naturalGasCarbon){
                    naturalGasCarbon.innerText = calculatedFootprint.naturalGas ? Math.round(calculatedFootprint.naturalGas*100)/100 : 0;
                }

                var otherFuelCarbon = document.querySelector("#otherFuel-carbon");
                if(otherFuelCarbon){
                    otherFuelCarbon.innerText = calculatedFootprint.otherFuel ? Math.round(calculatedFootprint.otherFuel*100)/100 : 0;
                }

                var electronicsCarbon = document.querySelector("#electronics-carbon");
                if(electronicsCarbon){
                    electronicsCarbon.innerText = calculatedFootprint.electronics ? Math.round(calculatedFootprint.electronics*100)/100 : 0;
                }

                var solidWasteCarbon = document.querySelector("#solidWaste-carbon");
                if(solidWasteCarbon){
                    solidWasteCarbon.innerText = calculatedFootprint.solidWaste ? Math.round(calculatedFootprint.solidWaste*100)/100 : 0;
                }

                var recyclingCarbon = document.querySelector("#recycling-carbon");
                if(recyclingCarbon){
                    recyclingCarbon.innerText = calculatedFootprint.recycling ? Math.round(calculatedFootprint.recycling*100)/100 : 0;
                }

                var procurementCarbon = document.querySelector("#procurement-carbon");
                if(procurementCarbon){
                    procurementCarbon.innerText = calculatedFootprint.procurementEmissions ? Math.round(calculatedFootprint.procurementEmissions*100)/100 : 0;
                }


                var transportationCarbon = document.querySelector("#transportation-carbon");
                if(transportationCarbon){
                    transportationCarbon.innerText = calculatedFootprint.transportationEmissions ? Math.round(calculatedFootprint.transportationEmissions*100)/100 : 0;
                }

                var foodCarbon = document.querySelector("#food-carbon");
                if(foodCarbon){
                    foodCarbon.innerText = calculatedFootprint.foodEmissions ? Math.round(calculatedFootprint.foodEmissions) : 0;
                }

                var spinner = document.querySelector("#spinner");
                if(spinner){
                    spinner.closest('button').removeAttribute("disabled");
                    spinner.classList.add("d-none");
                    spinner.classList.remove("d-inline-flex");
                }

            });
        });
      }, false);


      /** Reset Form Function */
      var reset = document.querySelector("#reset-form");

      if(reset){
        reset.addEventListener('submit', function (event) {
                
            var totalCarbon = document.querySelector("#total-carbon");
            if(totalCarbon){
                totalCarbon.innerText = 0;
            }

            var facilitiesCarbon = document.querySelector("#facilities-carbon");
            if(facilitiesCarbon){
                facilitiesCarbon.innerText = 0;
            }

            var electricityCarbon = document.querySelector("#electricity-carbon");
            if(electricityCarbon){
                electricityCarbon.innerText = 0;
            }

            var procurementCarbon = document.querySelector("#procurement-carbon");
            if(procurementCarbon){
                procurementCarbon.innerText = 0;
            }


            var transportationCarbon = document.querySelector("#transportation-carbon");
            if(transportationCarbon){
                transportationCarbon.innerText = 0;
            }

            var foodCarbon = document.querySelector("#food-carbon");
            if(foodCarbon){
                foodCarbon.innerText = 0;
            }

            var spinner = document.querySelector("#spinner");
            if(spinner){
                spinner.closest('button').removeAttribute("disabled");
                spinner.classList.add("d-none");
                spinner.classList.remove("d-inline-flex");
            }

        });
    }

  })()
  