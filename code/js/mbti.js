const mt = document.querySelectorAll('.mbti-table');

mt.forEach(function(mTable) {
    const as = mTable.querySelectorAll('.answer');

    as.forEach(function(answer) {
        var e = answer.querySelector('.chb i');
        if (e && e.classList.contains('fa-check-square')) {
            e.classList.remove('fa-check-square');
            e.classList.add('fa-square');
            var ee1 = answer.querySelector('text');
            if (ee1 && ee1.classList.contains('checked')) {
                ee1.classList.remove('green');
            }
        }
    });

    as.forEach(function(answer) {
        var e = answer.querySelector('.chb');
        var ee1 = answer.querySelector('.text');
        var eee1 = answer.querySelector('.chb i');

        e.addEventListener('click', function() {
            as.forEach(function(answer) {
                var f = answer.querySelector('.chb i');
                if (f && f.classList.contains('fa-check-square')) {
                    f.classList.remove('fa-check-square');
                    f.classList.add('fa-square');
                    var ff1 = answer.querySelector('.text');
                    ff1.classList.remove('.checked');
                }
            });


            
            
            eee1.classList.remove('fa-square');
            eee1.classList.add('fa-check-square');
            if (ee1.classList.contains('fa-check-square')) ee1.classList.add('checked');
        });
        
    });
});
