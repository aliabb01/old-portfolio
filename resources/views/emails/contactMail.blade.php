@component('mail::message')

# {{ $data['name'] }} has just sent an email from Portfolio Website

<strong> Name </strong> - {{ $data['name'] }}

<strong> Sender's email </strong> - {{ $data['email'] }}

<strong> Message :</strong>

@component('mail::panel')
    <p style="border: 10px;">{{ $data['message'] }}</p>
@endcomponent

@endcomponent