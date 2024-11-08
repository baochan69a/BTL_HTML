const dt = document.querySelectorAll('.disc-table');

dt.forEach(function(discTable) {
    const checkboxes = discTable.querySelectorAll('.cb');

    var check1 = false, check2 = false;
    var lct1 = -1, lct2 = -1;
    var lct = 1;

    checkboxes.forEach(function(cb) {
        var e1 = cb.querySelector('.chb-yes i');
        var e2 = cb.querySelector('.chb-no i');

        if (e1.classList.contains('far') && e1.classList.contains('fa-check-square')) {
            check1 = true;
            lct1 = lct;
        }
        if (e2.classList.contains('far') && e2.classList.contains('fa-check-square')) {
            check2 = true;
            lct2 = lct;
        }
        lct++;
    });

    checkboxes.forEach(function(cb) {
        var e1 = cb.querySelector('.chb-yes i');
        var e2 = cb.querySelector('.chb-no i');
        var e21 = cb.querySelector('.chb-yes');
        var e22 = cb.querySelector('.chb-no');

        e1.addEventListener('click', function() {
            if (e1.classList.contains('far') && e1.classList.contains('fa-square')) {
                var ele = cb.querySelector('.text');
                checkboxes.forEach(function(cb2) {
                    var ele1 = cb2.querySelector('.chb-yes i');
                    var ele2 = cb2.querySelector('.chb-no i');
                    var ele21 = cb2.querySelector('.chb-yes');
                    var ele22 = cb2.querySelector('.chb-no');
            
                    if (ele1.classList.contains('far') && ele1.classList.contains('fa-check-square')) {
                        ele1.classList.remove('fa-check-square');
                        ele1.classList.add('fa-square');
                        ele21.classList.remove('checked1'); 
                        
                        var ele3 = cb2.querySelector('.text');
                        ele3.classList.remove('checked1');
                    }
                });

                e1.classList.remove('fa-square');
                e1.classList.add('fa-check-square');
                e21.classList.add('checked1'); 
                ele.classList.add('checked1');
            }
        });

        e2.addEventListener('click', function() {
            if (e2.classList.contains('far') && e2.classList.contains('fa-square')) {
                var ele = cb.querySelector('.text');
                checkboxes.forEach(function(cb2) {
                    var ele1 = cb2.querySelector('.chb-yes i');
                    var ele2 = cb2.querySelector('.chb-no i');
                    var ele21 = cb2.querySelector('.chb-yes');
                    var ele22 = cb2.querySelector('.chb-no');
                    

                    if (ele2.classList.contains('far') && ele2.classList.contains('fa-check-square')) {
                        ele2.classList.remove('fa-check-square');
                        ele2.classList.add('fa-square');
                        ele22.classList.remove('checked2'); 

                        var ele3 = cb2.querySelector('.text');
                        ele3.classList.remove('checked2');
                    }
                });
                
                e2.classList.remove('fa-square');
                e2.classList.add('fa-check-square');
                e22.classList.add('checked2'); 
                ele.classList.add('checked2');
            }
        });
    });
});
