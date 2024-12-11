import { usePage } from '@inertiajs/react';
import React from 'react'

export default function Favorites({ profile_id, user_id }) {
    const user = usePage().props.auth.user;
    console.log(user.id);

    return (
        <div>Favorites</div>
    )
}
