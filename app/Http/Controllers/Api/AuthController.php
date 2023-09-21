<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Http\Traits\JsonResponseTrait;

class AuthController extends Controller
{   
    use JsonResponseTrait;

    public function login(LoginRequest $request)
    {    
        $validated = $request->validated();
        
        if(Auth::attempt($validated)) {
            return new UserResource(Auth::user());
        } 

        return $this->errorResponse('These credentials do not match our records', 404);
    }

    public function user()
    {
        return new UserResource(Auth::user());
    }

}