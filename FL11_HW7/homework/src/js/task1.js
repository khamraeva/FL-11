const email = prompt('Input your e-mail');
const emailLength = 6;
const newPasswordLength = 5;
if (!email) {
	alert('Canceled.');
} else if (email.length < emailLength) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
	const password = prompt('Input your password');
	if (!password) {
		alert('Canceled');
	} else if (email === 'user@gmail.com' && password !== 'UserPass') {
		alert('Wrong password');
	} else if (email === 'admin@gmail.com' && password !== 'AdminPass') {
		alert('Wrong password');
	} else {
		const changePassword = confirm('Do you want to change your password?');
		if (!changePassword) {
			alert('You have failed the change');
		}	else if (changePassword) {
			const oldPassword = prompt('Input your old password');
			if (!oldPassword) {
				alert('Canceled');
			} else if (email === 'user@gmail.com' && oldPassword !== 'UserPass') {
				alert('Wrong password');
			} else if (email === 'admin@gmail.com' && oldPassword !== 'AdminPass') {
				alert('Wrong password');
			} else {
				const newPassword = prompt('Input the new password');
				if (newPassword.length < newPasswordLength) {
					alert('It\'s too short password. Sorry.');
				} else {
					const newPasswordConfirmation = prompt('Input the new password one more time');
					if (newPassword === newPasswordConfirmation) {
						alert('You have successfully changed your password.');
					} else {
						alert('You wrote the wrong password');
					}
				}	
			}
		}
	}
} else {
	alert('I don\'t know you');
}
