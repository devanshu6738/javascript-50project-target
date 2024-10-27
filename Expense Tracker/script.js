const dev1 = document.getElementById('form1');
        const dev2 = document.getElementById('tab2');
        dev1.addEventListener('submit', function(event) {
            event.preventDefault();
            const dev3 = document.getElementById('form2').value;
            const dev4 = document.getElementById('form3').value;
            const dev5 = document.getElementById('amount').value;
            if (dev3 && dev4 && !isNaN(dev5) && dev5 > 0) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `<td>${dev3}</td><td>${dev4}</td><td>${dev5}</td>`;
                dev2.appendChild(newRow);
                document.getElementById("form2").value = '';
                document.getElementById('form3').value = '';
                document.getElementById('amount').value = '';
            } else {
                alert("Please fill out the form correctly.");
            }
        });