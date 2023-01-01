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
                        'status' => 409,
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
                        'status' => 201,
                        'message' => 'Added to Cart',
                       ]);
                }



                }
            else
            {

                return response()->json([
                    'status' => 404,
                    'message' => 'Product not found!',
                   ]);

            }
        } else {
           return response()->json([
            'status' => 401,
            'message' => 'Login to Add to Cart',
           ]);
        }

    }
    public function viewcart()
    {

        if (auth('sanctum')->check())
        {
            $user_id = auth('sanctum')->user()->id;
            $cartitems = Cart::where('user_id', $user_id)->get();

            return response()->json([
                'status' => 200,
                'cart' => $cartitems,
               ]);

        }
        else
        {
            return response()->json([
                'status' => 401,
                'message' => 'Login to View Cart Data',
               ]);
        }

    }
}
