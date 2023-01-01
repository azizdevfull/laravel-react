<?php

namespace App\Http\Controllers\API;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addtocart(Request $request)
    {
        if (Auth('sanctum')->check()) {

            $user_id = auth('sanctum')->user()->id;
            $product_id = $request->product_id;
            $product_qty = $request->product_qty;
            $productCheck = Product::where('id',$product_id)->first();
            if ($productCheck) {

                if (Cart::where('product_id',$product_id)->where('user_id',$user_id)->exists()) {

                    return response()->json([
                        'start' => 409,
                        'message' => $productCheck->name . ' Already Added To Cart!',
                       ]);

                }
                else
                {
                    $cartitem = new Cart();
                    $cartitem->user_id = $user_id;
                    $cartitem->product_id = $product_id;
                    $cartitem->product_qty = $product_qty;
                    $cartitem->save();
                    return response()->json([
                        'start' => 201,
                        'message' => 'Added to Cart',
                       ]);
                }



                }
            else
            {

                return response()->json([
                    'start' => 404,
                    'message' => 'Product not found!',
                   ]);

            }
        } else {
           return response()->json([
            'start' => 401,
            'message' => 'Login to Add to Cart',
           ]);
        }

    }
}
