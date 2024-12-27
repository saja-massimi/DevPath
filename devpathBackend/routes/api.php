<?php

use App\Http\Controllers\api\AuthApiController;
use App\Http\Controllers\api\ProfileApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CoursesApiController;
use App\Http\Controllers\Api\EnrollmentsApiController;
use App\Http\Controllers\Api\CategoriesApiController;
use App\Http\Controllers\Api\ContactUsApiController;
use App\Http\Controllers\Api\CustomerApiController;
use App\Http\Controllers\Api\TeacherApiController;
use App\Http\Controllers\Api\WishlistApiController;
use App\Http\Controllers\Api\CartApiController;
use App\Http\Controllers\api\TransactionApiController;

//************************** Login & Registration ************************ */
Route::post('/register', [AuthApiController::class, 'register']);
Route::post('/login', [AuthApiController::class, 'login']);



//******************************* Profile ******************************** */

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', [ProfileApiController::class, 'profile'])->name('profile');
    Route::put('/profile', [ProfileApiController::class, 'updateProfile'])->name('update');
    Route::put('/updatePassword', [ProfileApiController::class, 'updatePassword'])->name('updatePassword');
});



//**************************** Teachers ******************************** */
Route::get('/teachers', [TeacherApiController::class, 'index'])->name('index');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::put('/teachers/{id}', [TeacherApiController::class, 'update'])->name('update');
    Route::get('/teachers/{id}', [TeacherApiController::class, 'show'])->name('show');
    Route::get('/teacher/courses/{id}', [TeacherApiController::class, 'teacher_courses'])->name('teacher.courses');
});




//**************************** Customers ******************************** */
Route::get('/customers', [CustomerApiController::class, 'index'])->name('index');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::put('/customers/{id}', [CustomerApiController::class, 'update'])->name('update');
    Route::get('/user/courses/{id}', [CustomerApiController::class, 'user_courses'])->name('user.courses');
});


//***************************** Courses **************************** */

Route::get('/courses', [CoursesApiController::class, 'index'])->name('index');
Route::get('/courses/{course}', [CoursesApiController::class, 'show'])->name('show');

Route::middleware(['auth:sanctum', 'authorize'])->group(function () {

    Route::post('/courses', [CoursesApiController::class, 'store'])->name('store');
    Route::patch('/courses/{course}', [CoursesApiController::class, 'update'])->name('update');
    Route::delete('/courses/{course}', [CoursesApiController::class, 'destroy'])->name('destroy');
});


//***************************** Enrollments **************************** */

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user/courses', [EnrollmentsApiController::class, 'userCourses'])->name('user.courses');

    Route::get('/enrollments', [EnrollmentsApiController::class, 'index'])->name('index');
    Route::post('/enrollments', [EnrollmentsApiController::class, 'store'])->name('store');
    Route::get('/enrollments/{enrollment}', [EnrollmentsApiController::class, 'show'])->name('show');
    Route::patch('/enrollments/{enrollment}', [EnrollmentsApiController::class, 'update'])->name('update');
    Route::delete('/enrollments/{enrollment}', [EnrollmentsApiController::class, 'destroy'])->name('destroy');
});

//***************************** Categories **************************** */

Route::get('/categories', [CategoriesApiController::class, 'index'])->name('index');

Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/categories', [CategoriesApiController::class, 'store'])->name('store');
    Route::get('/categories/{category}', [CategoriesApiController::class, 'show'])->name('show');
    Route::patch('/categories/{category}', [CategoriesApiController::class, 'update'])->name('update');
    Route::delete('/categories/{category}', [CategoriesApiController::class, 'destroy'])->name('destroy');
});

//****************************  Contact Us ************************** */

Route::post('/contact-us', [ContactUsApiController::class, 'contactUs'])->name('contact-us');

//****************************** Wishlist **************************** */

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/wishlist', [WishlistApiController::class, 'index'])->name('index');
    Route::post('/wishlist', [WishlistApiController::class, 'store'])->name('store');
    Route::delete('/wishlist/{id}', [WishlistApiController::class, 'destroy'])->name('destroy');
});


//****************************** Transaction ******************************* */

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/transaction', [TransactionApiController::class, 'index'])->name('index');
    Route::post('/transaction', [TransactionApiController::class, 'store'])->name('store');
    Route::delete('/transaction/{id}', [TransactionApiController::class, 'destroy'])->name('destroy');
});




//***************************** Logout **************************** */

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthApiController::class, 'logout'])->name('logout');
});
