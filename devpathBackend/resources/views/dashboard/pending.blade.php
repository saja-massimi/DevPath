@extends('dashboard.index')

@section('content')
<div class="content-body">
    <div class="container-fluid">
        <div class="row page-titles mx-0">
            <div class="col-sm-6 p-md-0">
                <div class="welcome-text">
                    <h4>All Courses</h4>
                    <p class="mb-0">DevPath dashboard</p>
                </div>
            </div>
            <div class="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{route('dashboard')}}">Home</a></li>
                    <li class="breadcrumb-item active"><a href="javascript:void(0)">Pending Users</a></li>
                </ol>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">All Users</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="example" class="display" style="min-width: 845px">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>User Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($users as $user)
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control user-name" value="{{ $user->name }}" disabled data-default="{{ $user->name }}" data-user-id="{{ $user->id }}">
                                        </td>
                                        <td>
                                            <input type="email" class="form-control user-email" value="{{ $user->email }}" disabled data-default="{{ $user->email }}" data-user-id="{{ $user->id }}">
                                        </td>
                                        <td>
                                            <select class="form-control user-role" disabled data-default="{{ $user->role }}" data-user-id="{{ $user->id }}">
                                                <option value="student" {{ $user->role === 'student' ? 'selected' : '' }}>Student</option>
                                                <option value="teacher" {{ $user->role === 'teacher' ? 'selected' : '' }}>Teacher</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button class="btn btn-primary edit-btn" data-user-id="{{ $user->id }}">Edit</button>
                                            <button class="btn btn-success update-btn d-none" data-user-id="{{ $user->id }}">Update</button>
                                            <button class="btn btn-danger cancel-btn d-none" data-user-id="{{ $user->id }}">Cancel</button>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = button.dataset.userId;

                toggleEditMode(userId, true);
            });
        });

        document.querySelectorAll('.cancel-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = button.dataset.userId;

                resetFields(userId);
                toggleEditMode(userId, false);
            });
        });

        document.querySelectorAll('.update-btn').forEach(button => {
            button.addEventListener('click', function() {
                const userId = button.dataset.userId;

                const nameInput = document.querySelector(`.user-name[data-user-id="${userId}"]`);
                const emailInput = document.querySelector(`.user-email[data-user-id="${userId}"]`);
                const roleInput = document.querySelector(`.user-role[data-user-id="${userId}"]`);

                const formData = {
                    name: nameInput.value,
                    email: emailInput.value,
                    role: roleInput.value,
                };

                fetch(`/dashboard/customer/update/${userId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                        },
                        body: JSON.stringify(formData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        if (data.success) {
                            alert('User updated successfully!');
                            toggleEditMode(userId, false);
                        } else {
                            alert('Failed to update user. Please try again.');
                        }
                    })
                    .catch(error => console.error('Error:', error));
            });
        });

        function toggleEditMode(userId, isEditMode) {
            const nameInput = document.querySelector(`.user-name[data-user-id="${userId}"]`);
            const emailInput = document.querySelector(`.user-email[data-user-id="${userId}"]`);
            const roleInput = document.querySelector(`.user-role[data-user-id="${userId}"]`);

            nameInput.disabled = !isEditMode;
            emailInput.disabled = !isEditMode;
            roleInput.disabled = !isEditMode;

            document.querySelector(`.edit-btn[data-user-id="${userId}"]`).classList.toggle('d-none', isEditMode);
            document.querySelector(`.update-btn[data-user-id="${userId}"]`).classList.toggle('d-none', !isEditMode);
            document.querySelector(`.cancel-btn[data-user-id="${userId}"]`).classList.toggle('d-none', !isEditMode);
        }

        function resetFields(userId) {
            const nameInput = document.querySelector(`.user-name[data-user-id="${userId}"]`);
            const emailInput = document.querySelector(`.user-email[data-user-id="${userId}"]`);
            const roleInput = document.querySelector(`.user-role[data-user-id="${userId}"]`);

            nameInput.value = nameInput.dataset.default;
            emailInput.value = emailInput.dataset.default;
            roleInput.value = roleInput.dataset.default;
        }
    });
</script>
@endsection