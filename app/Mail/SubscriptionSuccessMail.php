<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SubscriptionSuccessMail extends Mailable
{
    use Queueable, SerializesModels;

    public $userName;
    public $subscriptionPlan;

    /**
     * Create a new message instance.
     *
     * @param string $userName
     * @param string $subscriptionPlan
     */
    public function __construct($userName, $subscriptionPlan)
    {
        $this->userName = $userName;
        $this->subscriptionPlan = $subscriptionPlan;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->subject('Subscription Purchase Successful')
            ->view('emails.subscription-success');
    }
}
