export function showModalToggle(modalID)
{
    var modal = document.getElementById(modalID);

    if(modal.hidden === true)
    {
        modal.removeAttribute('hidden');
    }
    else
    {
        modal.setAttribute('hidden', true);
    }
}

