
// POST //

async function postSchoolEnrollment($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
		vals['enrollmentGroupName'] = valueEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
		vals['childPottyTrained'] = valueChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
		vals['familyMarried'] = valueFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
		vals['familySeparated'] = valueFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
		vals['familyDivorced'] = valueFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
		vals['childMedicalConditions'] = valueChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
		vals['childPreviousSchoolsAttended'] = valueChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
		vals['familyHowDoYouKnowTheSchool'] = valueFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
		vals['childDescription'] = valueChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
		vals['childObjectives'] = valueChildObjectives;

	var valueBlockKeys = [];
	$formValues.find('input.valueBlockKeys:checked').each(function(index) {
		valueBlockKeys.push($(this).val());
	});
	if(valueBlockKeys.length > 0)
		vals['blockKeys'] = valueBlockKeys;

		vals['childKey'] = [valueChildKey];
	if(valueChildKey != null && valueChildKey !== '')
		vals['childKey'] = valueChildKey;

	var valueMomKeys = [];
	$formValues.find('input.valueMomKeys:checked').each(function(index) {
		valueMomKeys.push($(this).val());
	});
	if(valueMomKeys.length > 0)
		vals['momKeys'] = valueMomKeys;

	var valueDadKeys = [];
	$formValues.find('input.valueDadKeys:checked').each(function(index) {
		valueDadKeys.push($(this).val());
	});
	if(valueDadKeys.length > 0)
		vals['dadKeys'] = valueDadKeys;

	var valueGuardianKeys = [];
	$formValues.find('input.valueGuardianKeys:checked').each(function(index) {
		valueGuardianKeys.push($(this).val());
	});
	if(valueGuardianKeys.length > 0)
		vals['guardianKeys'] = valueGuardianKeys;

	var valuePaymentKeys = [];
	$formValues.find('input.valuePaymentKeys:checked').each(function(index) {
		valuePaymentKeys.push($(this).val());
	});
	if(valuePaymentKeys.length > 0)
		vals['paymentKeys'] = valuePaymentKeys;

	var valueUserKeys = [];
	$formValues.find('input.valueUserKeys:checked').each(function(index) {
		valueUserKeys.push($(this).val());
	});
	if(valueUserKeys.length > 0)
		vals['userKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
		vals['childCompleteName'] = valueChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
		vals['enrollmentChargeDate'] = valueEnrollmentChargeDate;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolEnrollmentVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolEnrollmentVals(JSON.parse(json), success, error);
}

function putimportSchoolEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolEnrollmentVals(JSON.parse(json), success, error);
}

function putmergeSchoolEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolEnrollment($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
		vals['enrollmentGroupName'] = valueEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
		vals['childPottyTrained'] = valueChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
		vals['familyMarried'] = valueFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
		vals['familySeparated'] = valueFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
		vals['familyDivorced'] = valueFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
		vals['childMedicalConditions'] = valueChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
		vals['childPreviousSchoolsAttended'] = valueChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
		vals['familyHowDoYouKnowTheSchool'] = valueFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
		vals['childDescription'] = valueChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
		vals['childObjectives'] = valueChildObjectives;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['blockKeys'] = [valueBlockKeys];

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['childKey'] = valueChildKey;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['momKeys'] = [valueMomKeys];

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['dadKeys'] = [valueDadKeys];

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['guardianKeys'] = [valueGuardianKeys];

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['paymentKeys'] = [valuePaymentKeys];

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = [valueUserKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
		vals['childCompleteName'] = valueChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
		vals['enrollmentChargeDate'] = valueEnrollmentChargeDate;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	putcopySchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
	var removeEnrollmentApproved = $formFilters.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
	var removeEnrollmentImmunizations = $formFilters.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
	var removeEnrollmentGroupName = $formFilters.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
	var removeCustomerProfileId = $formFilters.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
	var removeEnrollmentPaymentComplete = $formFilters.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
	var removeChildPottyTrained = $formFilters.find('.removeChildPottyTrained').val() === 'true';
	var valueChildPottyTrainedSelectVal = $formValues.find('select.setChildPottyTrained').val();
	var valueChildPottyTrained = null;
	if(valueChildPottyTrainedSelectVal !== '')
		valueChildPottyTrained = valueChildPottyTrainedSelectVal == 'true';
	setChildPottyTrained = removeChildPottyTrained ? null : valueChildPottyTrained;
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
	var removeEnrollmentPaymentEachMonth = $formFilters.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
	var removeFamilyMarried = $formFilters.find('.removeFamilyMarried').val() === 'true';
	var valueFamilyMarriedSelectVal = $formValues.find('select.setFamilyMarried').val();
	var valueFamilyMarried = null;
	if(valueFamilyMarriedSelectVal !== '')
		valueFamilyMarried = valueFamilyMarriedSelectVal == 'true';
	setFamilyMarried = removeFamilyMarried ? null : valueFamilyMarried;
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
	var removeFamilySeparated = $formFilters.find('.removeFamilySeparated').val() === 'true';
	var valueFamilySeparatedSelectVal = $formValues.find('select.setFamilySeparated').val();
	var valueFamilySeparated = null;
	if(valueFamilySeparatedSelectVal !== '')
		valueFamilySeparated = valueFamilySeparatedSelectVal == 'true';
	setFamilySeparated = removeFamilySeparated ? null : valueFamilySeparated;
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
	var removeFamilyDivorced = $formFilters.find('.removeFamilyDivorced').val() === 'true';
	var valueFamilyDivorcedSelectVal = $formValues.find('select.setFamilyDivorced').val();
	var valueFamilyDivorced = null;
	if(valueFamilyDivorcedSelectVal !== '')
		valueFamilyDivorced = valueFamilyDivorcedSelectVal == 'true';
	setFamilyDivorced = removeFamilyDivorced ? null : valueFamilyDivorced;
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
	var removeFamilyAddress = $formFilters.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
	var removeEnrollmentSpecialConsiderations = $formFilters.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
	var removeChildMedicalConditions = $formFilters.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
	var removeChildPreviousSchoolsAttended = $formFilters.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
	var removeFamilyHowDoYouKnowTheSchool = $formFilters.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
	var removeChildDescription = $formFilters.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
	var removeChildObjectives = $formFilters.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['addBlockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['setChildKey'] = valueChildKey;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['addMomKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['addDadKeys'] = valueDadKeys;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['addGuardianKeys'] = valueGuardianKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
	var removeChildCompleteName = $formFilters.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
	var removeChildCompleteNamePreferred = $formFilters.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
	var removeChildBirthDate = $formFilters.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
	var removeSchoolAddress = $formFilters.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
	var removeEnrollmentChargeDate = $formFilters.find('.removeEnrollmentChargeDate').val() === 'true';
	var setEnrollmentChargeDate = removeEnrollmentChargeDate ? null : $formValues.find('.setEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate || setEnrollmentChargeDate != null && setEnrollmentChargeDate !== '')
		vals['setEnrollmentChargeDate'] = setEnrollmentChargeDate;
	var addEnrollmentChargeDate = $formValues.find('.addEnrollmentChargeDate').val();
	if(addEnrollmentChargeDate != null && addEnrollmentChargeDate !== '')
		vals['addEnrollmentChargeDate'] = addEnrollmentChargeDate;
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate != null && removeEnrollmentChargeDate !== '')
		vals['removeEnrollmentChargeDate'] = removeEnrollmentChargeDate;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
	var removeEnrollmentSignature1 = $formFilters.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
	var removeEnrollmentSignature2 = $formFilters.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
	var removeEnrollmentSignature3 = $formFilters.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
	var removeEnrollmentSignature4 = $formFilters.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
	var removeEnrollmentSignature5 = $formFilters.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
	var removeEnrollmentSignature6 = $formFilters.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
	var removeEnrollmentSignature7 = $formFilters.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
	var removeEnrollmentSignature8 = $formFilters.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
	var removeEnrollmentSignature9 = $formFilters.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
	var removeEnrollmentSignature10 = $formFilters.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
	var removeEnrollmentDate1 = $formFilters.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
	var removeEnrollmentDate2 = $formFilters.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
	var removeEnrollmentDate3 = $formFilters.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
	var removeEnrollmentDate4 = $formFilters.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
	var removeEnrollmentDate5 = $formFilters.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
	var removeEnrollmentDate6 = $formFilters.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
	var removeEnrollmentDate7 = $formFilters.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
	var removeEnrollmentDate8 = $formFilters.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
	var removeEnrollmentDate9 = $formFilters.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
	var removeEnrollmentDate10 = $formFilters.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchSchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
		if(filterSeasonKey != null && filterSeasonKey !== '')
			filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
		var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
		var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
		var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
		var filterSeasonSummer = null;
		if(filterSeasonSummerSelectVal !== '')
			filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
		if(filterSeasonSummer != null && filterSeasonSummer === true)
			filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

		var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
		var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
		var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
		var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
		var filterSeasonWinter = null;
		if(filterSeasonWinterSelectVal !== '')
			filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
		if(filterSeasonWinter != null && filterSeasonWinter === true)
			filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
		if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
			filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolEnrollmentVals(filters, vals, success, error);
}

function patchSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolEnrollment($formFilters, success, error) {
	var filters = searchSchoolEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolEnrollmentVals(filters, success, error);
}

function searchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
		if(filterSeasonKey != null && filterSeasonKey !== '')
			filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
		var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
		var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
		var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
		var filterSeasonSummer = null;
		if(filterSeasonSummerSelectVal !== '')
			filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
		if(filterSeasonSummer != null && filterSeasonSummer === true)
			filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

		var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
		var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
		var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
		var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
		var filterSeasonWinter = null;
		if(filterSeasonWinterSelectVal !== '')
			filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
		if(filterSeasonWinter != null && filterSeasonWinter === true)
			filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
		if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
			filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function searchSchoolEnrollmentVals(filters, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals($formFilters, success, error);
}

function suggestSchoolEnrollmentYearKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueYearKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_yearKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'YearKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

function suggestSchoolEnrollmentBlockKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueBlockKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals(filters, success, error);
}

function suggestSchoolEnrollmentChildKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ChildKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals(filters, success, error);
}

function suggestSchoolEnrollmentMomKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_momKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueMomKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_momKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MomKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals(filters, success, error);
}

function suggestSchoolEnrollmentDadKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_dadKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueDadKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_dadKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DadKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals(filters, success, error);
}

function suggestSchoolEnrollmentGuardianKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_guardianKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueGuardianKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_guardianKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GuardianKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals(filters, success, error);
}

function suggestSchoolEnrollmentPaymentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_enrollmentKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePaymentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_enrollmentKey_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals(filters, success, error);
}

function suggestSchoolEnrollmentUserKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_userKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueUserKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_userKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UserKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

// PATCHPayments //

async function patchpaymentsSchoolEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchpaymentsSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
	var removeEnrollmentApproved = $formFilters.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
	var removeEnrollmentImmunizations = $formFilters.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
	var removeEnrollmentGroupName = $formFilters.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
	var removeCustomerProfileId = $formFilters.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
	var removeEnrollmentPaymentComplete = $formFilters.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
	var removeChildPottyTrained = $formFilters.find('.removeChildPottyTrained').val() === 'true';
	var valueChildPottyTrainedSelectVal = $formValues.find('select.setChildPottyTrained').val();
	var valueChildPottyTrained = null;
	if(valueChildPottyTrainedSelectVal !== '')
		valueChildPottyTrained = valueChildPottyTrainedSelectVal == 'true';
	setChildPottyTrained = removeChildPottyTrained ? null : valueChildPottyTrained;
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
	var removeEnrollmentPaymentEachMonth = $formFilters.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
	var removeFamilyMarried = $formFilters.find('.removeFamilyMarried').val() === 'true';
	var valueFamilyMarriedSelectVal = $formValues.find('select.setFamilyMarried').val();
	var valueFamilyMarried = null;
	if(valueFamilyMarriedSelectVal !== '')
		valueFamilyMarried = valueFamilyMarriedSelectVal == 'true';
	setFamilyMarried = removeFamilyMarried ? null : valueFamilyMarried;
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
	var removeFamilySeparated = $formFilters.find('.removeFamilySeparated').val() === 'true';
	var valueFamilySeparatedSelectVal = $formValues.find('select.setFamilySeparated').val();
	var valueFamilySeparated = null;
	if(valueFamilySeparatedSelectVal !== '')
		valueFamilySeparated = valueFamilySeparatedSelectVal == 'true';
	setFamilySeparated = removeFamilySeparated ? null : valueFamilySeparated;
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
	var removeFamilyDivorced = $formFilters.find('.removeFamilyDivorced').val() === 'true';
	var valueFamilyDivorcedSelectVal = $formValues.find('select.setFamilyDivorced').val();
	var valueFamilyDivorced = null;
	if(valueFamilyDivorcedSelectVal !== '')
		valueFamilyDivorced = valueFamilyDivorcedSelectVal == 'true';
	setFamilyDivorced = removeFamilyDivorced ? null : valueFamilyDivorced;
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
	var removeFamilyAddress = $formFilters.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
	var removeEnrollmentSpecialConsiderations = $formFilters.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
	var removeChildMedicalConditions = $formFilters.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
	var removeChildPreviousSchoolsAttended = $formFilters.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
	var removeFamilyHowDoYouKnowTheSchool = $formFilters.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
	var removeChildDescription = $formFilters.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
	var removeChildObjectives = $formFilters.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['addBlockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['setChildKey'] = valueChildKey;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['addMomKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['addDadKeys'] = valueDadKeys;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['addGuardianKeys'] = valueGuardianKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
	var removeChildCompleteName = $formFilters.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
	var removeChildCompleteNamePreferred = $formFilters.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
	var removeChildBirthDate = $formFilters.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
	var removeSchoolAddress = $formFilters.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
	var removeEnrollmentChargeDate = $formFilters.find('.removeEnrollmentChargeDate').val() === 'true';
	var setEnrollmentChargeDate = removeEnrollmentChargeDate ? null : $formValues.find('.setEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate || setEnrollmentChargeDate != null && setEnrollmentChargeDate !== '')
		vals['setEnrollmentChargeDate'] = setEnrollmentChargeDate;
	var addEnrollmentChargeDate = $formValues.find('.addEnrollmentChargeDate').val();
	if(addEnrollmentChargeDate != null && addEnrollmentChargeDate !== '')
		vals['addEnrollmentChargeDate'] = addEnrollmentChargeDate;
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate != null && removeEnrollmentChargeDate !== '')
		vals['removeEnrollmentChargeDate'] = removeEnrollmentChargeDate;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
	var removeEnrollmentSignature1 = $formFilters.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
	var removeEnrollmentSignature2 = $formFilters.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
	var removeEnrollmentSignature3 = $formFilters.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
	var removeEnrollmentSignature4 = $formFilters.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
	var removeEnrollmentSignature5 = $formFilters.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
	var removeEnrollmentSignature6 = $formFilters.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
	var removeEnrollmentSignature7 = $formFilters.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
	var removeEnrollmentSignature8 = $formFilters.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
	var removeEnrollmentSignature9 = $formFilters.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
	var removeEnrollmentSignature10 = $formFilters.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
	var removeEnrollmentDate1 = $formFilters.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
	var removeEnrollmentDate2 = $formFilters.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
	var removeEnrollmentDate3 = $formFilters.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
	var removeEnrollmentDate4 = $formFilters.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
	var removeEnrollmentDate5 = $formFilters.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
	var removeEnrollmentDate6 = $formFilters.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
	var removeEnrollmentDate7 = $formFilters.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
	var removeEnrollmentDate8 = $formFilters.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
	var removeEnrollmentDate9 = $formFilters.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
	var removeEnrollmentDate10 = $formFilters.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchpaymentsSchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchpaymentsSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSeasonKey = $formFilters.find('.valueSeasonKey').val();
		if(filterSeasonKey != null && filterSeasonKey !== '')
			filters.push({ name: 'fq', value: 'seasonKey:' + filterSeasonKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var $filterSeasonSummerCheckbox = $formFilters.find('input.valueSeasonSummer[type = "checkbox"]');
		var $filterSeasonSummerSelect = $formFilters.find('select.valueSeasonSummer');
		var filterSeasonSummer = $filterSeasonSummerSelect.length ? $filterSeasonSummerSelect.val() : $filterSeasonSummerCheckbox.prop('checked');
		var filterSeasonSummerSelectVal = $formFilters.find('select.filterSeasonSummer').val();
		var filterSeasonSummer = null;
		if(filterSeasonSummerSelectVal !== '')
			filterSeasonSummer = filterSeasonSummerSelectVal == 'true';
		if(filterSeasonSummer != null && filterSeasonSummer === true)
			filters.push({ name: 'fq', value: 'seasonSummer:' + filterSeasonSummer });

		var $filterSeasonWinterCheckbox = $formFilters.find('input.valueSeasonWinter[type = "checkbox"]');
		var $filterSeasonWinterSelect = $formFilters.find('select.valueSeasonWinter');
		var filterSeasonWinter = $filterSeasonWinterSelect.length ? $filterSeasonWinterSelect.val() : $filterSeasonWinterCheckbox.prop('checked');
		var filterSeasonWinterSelectVal = $formFilters.find('select.filterSeasonWinter').val();
		var filterSeasonWinter = null;
		if(filterSeasonWinterSelectVal !== '')
			filterSeasonWinter = filterSeasonWinterSelectVal == 'true';
		if(filterSeasonWinter != null && filterSeasonWinter === true)
			filters.push({ name: 'fq', value: 'seasonWinter:' + filterSeasonWinter });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSeasonCompleteName = $formFilters.find('.valueSeasonCompleteName').val();
		if(filterSeasonCompleteName != null && filterSeasonCompleteName !== '')
			filters.push({ name: 'fq', value: 'seasonCompleteName:' + filterSeasonCompleteName });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchpaymentsSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchpaymentsSchoolEnrollmentVals(filters, vals, success, error);
}

function patchpaymentsSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/enrollment/payments?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketSchoolEnrollment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-edit w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify enrollments');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKey').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			$('#Page_blockKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolChild', function (error, message) {
			$('#Page_childKey').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolMom', function (error, message) {
			$('#Page_momKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolDad', function (error, message) {
			$('#Page_dadKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolGuardian', function (error, message) {
			$('#Page_guardianKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			$('#Page_paymentKeys').trigger('oninput');
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_userKeys').trigger('oninput');
		});
	}
}
async function websocketSchoolEnrollmentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolEnrollmentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			if(vars.includes('created')) {
				$('.inputSchoolEnrollment' + pk + 'Created').val(o['created']);
				$('.varSchoolEnrollment' + pk + 'Created').text(o['created']);
				addGlow($('.inputSchoolEnrollment' + pk + 'Created'));
			}
			if(vars.includes('modified')) {
				$('.inputSchoolEnrollment' + pk + 'Modified').val(o['modified']);
				$('.varSchoolEnrollment' + pk + 'Modified').text(o['modified']);
				addGlow($('.inputSchoolEnrollment' + pk + 'Modified'));
			}
			if(vars.includes('archived')) {
				$('.inputSchoolEnrollment' + pk + 'Archived').val(o['archived']);
				$('.varSchoolEnrollment' + pk + 'Archived').text(o['archived']);
				addGlow($('.inputSchoolEnrollment' + pk + 'Archived'));
			}
			if(vars.includes('deleted')) {
				$('.inputSchoolEnrollment' + pk + 'Deleted').val(o['deleted']);
				$('.varSchoolEnrollment' + pk + 'Deleted').text(o['deleted']);
				addGlow($('.inputSchoolEnrollment' + pk + 'Deleted'));
			}
			if(vars.includes('enrollmentApproved')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentApproved').val(o['enrollmentApproved']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentApproved').text(o['enrollmentApproved']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentApproved'));
			}
			if(vars.includes('enrollmentImmunizations')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentImmunizations').val(o['enrollmentImmunizations']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentImmunizations').text(o['enrollmentImmunizations']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentImmunizations'));
			}
			if(vars.includes('enrollmentGroupName')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentGroupName').val(o['enrollmentGroupName']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentGroupName').text(o['enrollmentGroupName']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentGroupName'));
			}
			if(vars.includes('customerProfileId')) {
				$('.inputSchoolEnrollment' + pk + 'CustomerProfileId').val(o['customerProfileId']);
				$('.varSchoolEnrollment' + pk + 'CustomerProfileId').text(o['customerProfileId']);
				addGlow($('.inputSchoolEnrollment' + pk + 'CustomerProfileId'));
			}
			if(vars.includes('enrollmentPaymentComplete')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentComplete').val(o['enrollmentPaymentComplete']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentPaymentComplete').text(o['enrollmentPaymentComplete']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentComplete'));
			}
			if(vars.includes('childPottyTrained')) {
				$('.inputSchoolEnrollment' + pk + 'ChildPottyTrained').val(o['childPottyTrained']);
				$('.varSchoolEnrollment' + pk + 'ChildPottyTrained').text(o['childPottyTrained']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildPottyTrained'));
			}
			if(vars.includes('enrollmentPaymentEachMonth')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth').val(o['enrollmentPaymentEachMonth']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth').text(o['enrollmentPaymentEachMonth']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth'));
			}
			if(vars.includes('familyMarried')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyMarried').val(o['familyMarried']);
				$('.varSchoolEnrollment' + pk + 'FamilyMarried').text(o['familyMarried']);
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyMarried'));
			}
			if(vars.includes('familySeparated')) {
				$('.inputSchoolEnrollment' + pk + 'FamilySeparated').val(o['familySeparated']);
				$('.varSchoolEnrollment' + pk + 'FamilySeparated').text(o['familySeparated']);
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilySeparated'));
			}
			if(vars.includes('familyDivorced')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyDivorced').val(o['familyDivorced']);
				$('.varSchoolEnrollment' + pk + 'FamilyDivorced').text(o['familyDivorced']);
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyDivorced'));
			}
			if(vars.includes('familyAddress')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyAddress').val(o['familyAddress']);
				$('.varSchoolEnrollment' + pk + 'FamilyAddress').text(o['familyAddress']);
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyAddress'));
			}
			if(vars.includes('enrollmentSpecialConsiderations')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations').val(o['enrollmentSpecialConsiderations']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations').text(o['enrollmentSpecialConsiderations']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations'));
			}
			if(vars.includes('childMedicalConditions')) {
				$('.inputSchoolEnrollment' + pk + 'ChildMedicalConditions').val(o['childMedicalConditions']);
				$('.varSchoolEnrollment' + pk + 'ChildMedicalConditions').text(o['childMedicalConditions']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildMedicalConditions'));
			}
			if(vars.includes('childPreviousSchoolsAttended')) {
				$('.inputSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended').val(o['childPreviousSchoolsAttended']);
				$('.varSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended').text(o['childPreviousSchoolsAttended']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended'));
			}
			if(vars.includes('familyHowDoYouKnowTheSchool')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool').val(o['familyHowDoYouKnowTheSchool']);
				$('.varSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool').text(o['familyHowDoYouKnowTheSchool']);
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool'));
			}
			if(vars.includes('childDescription')) {
				$('.inputSchoolEnrollment' + pk + 'ChildDescription').val(o['childDescription']);
				$('.varSchoolEnrollment' + pk + 'ChildDescription').text(o['childDescription']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildDescription'));
			}
			if(vars.includes('childObjectives')) {
				$('.inputSchoolEnrollment' + pk + 'ChildObjectives').val(o['childObjectives']);
				$('.varSchoolEnrollment' + pk + 'ChildObjectives').text(o['childObjectives']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildObjectives'));
			}
			if(vars.includes('blockKeys')) {
				$('.inputSchoolEnrollment' + pk + 'BlockKeys').val(o['blockKeys']);
				$('.varSchoolEnrollment' + pk + 'BlockKeys').text(o['blockKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockKeys'));
			}
			if(vars.includes('childKey')) {
				$('.inputSchoolEnrollment' + pk + 'ChildKey').val(o['childKey']);
				$('.varSchoolEnrollment' + pk + 'ChildKey').text(o['childKey']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildKey'));
			}
			if(vars.includes('momKeys')) {
				$('.inputSchoolEnrollment' + pk + 'MomKeys').val(o['momKeys']);
				$('.varSchoolEnrollment' + pk + 'MomKeys').text(o['momKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'MomKeys'));
			}
			if(vars.includes('dadKeys')) {
				$('.inputSchoolEnrollment' + pk + 'DadKeys').val(o['dadKeys']);
				$('.varSchoolEnrollment' + pk + 'DadKeys').text(o['dadKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'DadKeys'));
			}
			if(vars.includes('guardianKeys')) {
				$('.inputSchoolEnrollment' + pk + 'GuardianKeys').val(o['guardianKeys']);
				$('.varSchoolEnrollment' + pk + 'GuardianKeys').text(o['guardianKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'GuardianKeys'));
			}
			if(vars.includes('paymentKeys')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentKeys').val(o['paymentKeys']);
				$('.varSchoolEnrollment' + pk + 'PaymentKeys').text(o['paymentKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentKeys'));
			}
			if(vars.includes('userKeys')) {
				$('.inputSchoolEnrollment' + pk + 'UserKeys').val(o['userKeys']);
				$('.varSchoolEnrollment' + pk + 'UserKeys').text(o['userKeys']);
				addGlow($('.inputSchoolEnrollment' + pk + 'UserKeys'));
			}
			if(vars.includes('inheritPk')) {
				$('.inputSchoolEnrollment' + pk + 'InheritPk').val(o['inheritPk']);
				$('.varSchoolEnrollment' + pk + 'InheritPk').text(o['inheritPk']);
				addGlow($('.inputSchoolEnrollment' + pk + 'InheritPk'));
			}
			if(vars.includes('sessionId')) {
				$('.inputSchoolEnrollment' + pk + 'SessionId').val(o['sessionId']);
				$('.varSchoolEnrollment' + pk + 'SessionId').text(o['sessionId']);
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionId'));
			}
			if(vars.includes('userId')) {
				$('.inputSchoolEnrollment' + pk + 'UserId').val(o['userId']);
				$('.varSchoolEnrollment' + pk + 'UserId').text(o['userId']);
				addGlow($('.inputSchoolEnrollment' + pk + 'UserId'));
			}
			if(vars.includes('userKey')) {
				$('.inputSchoolEnrollment' + pk + 'UserKey').val(o['userKey']);
				$('.varSchoolEnrollment' + pk + 'UserKey').text(o['userKey']);
				addGlow($('.inputSchoolEnrollment' + pk + 'UserKey'));
			}
			if(vars.includes('yearKey')) {
				$('.inputSchoolEnrollment' + pk + 'YearKey').val(o['yearKey']);
				$('.varSchoolEnrollment' + pk + 'YearKey').text(o['yearKey']);
				addGlow($('.inputSchoolEnrollment' + pk + 'YearKey'));
			}
			if(vars.includes('childCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'ChildCompleteName').val(o['childCompleteName']);
				$('.varSchoolEnrollment' + pk + 'ChildCompleteName').text(o['childCompleteName']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildCompleteName'));
			}
			if(vars.includes('childCompleteNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'ChildCompleteNamePreferred').val(o['childCompleteNamePreferred']);
				$('.varSchoolEnrollment' + pk + 'ChildCompleteNamePreferred').text(o['childCompleteNamePreferred']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildCompleteNamePreferred'));
			}
			if(vars.includes('childBirthDate')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDate').val(o['childBirthDate']);
				$('.varSchoolEnrollment' + pk + 'ChildBirthDate').text(o['childBirthDate']);
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDate'));
			}
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolAddress').val(o['schoolAddress']);
				$('.varSchoolEnrollment' + pk + 'SchoolAddress').text(o['schoolAddress']);
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolAddress'));
			}
			if(vars.includes('enrollmentChargeDate')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentChargeDate').val(o['enrollmentChargeDate']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentChargeDate').text(o['enrollmentChargeDate']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentChargeDate'));
			}
			if(vars.includes('enrollmentSignature1')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature1').val(o['enrollmentSignature1']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature1').text(o['enrollmentSignature1']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature1'));
			}
			if(vars.includes('enrollmentSignature2')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature2').val(o['enrollmentSignature2']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature2').text(o['enrollmentSignature2']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature2'));
			}
			if(vars.includes('enrollmentSignature3')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature3').val(o['enrollmentSignature3']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature3').text(o['enrollmentSignature3']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature3'));
			}
			if(vars.includes('enrollmentSignature4')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature4').val(o['enrollmentSignature4']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature4').text(o['enrollmentSignature4']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature4'));
			}
			if(vars.includes('enrollmentSignature5')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature5').val(o['enrollmentSignature5']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature5').text(o['enrollmentSignature5']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature5'));
			}
			if(vars.includes('enrollmentSignature6')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature6').val(o['enrollmentSignature6']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature6').text(o['enrollmentSignature6']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature6'));
			}
			if(vars.includes('enrollmentSignature7')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature7').val(o['enrollmentSignature7']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature7').text(o['enrollmentSignature7']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature7'));
			}
			if(vars.includes('enrollmentSignature8')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature8').val(o['enrollmentSignature8']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature8').text(o['enrollmentSignature8']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature8'));
			}
			if(vars.includes('enrollmentSignature9')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature9').val(o['enrollmentSignature9']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature9').text(o['enrollmentSignature9']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature9'));
			}
			if(vars.includes('enrollmentSignature10')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature10').val(o['enrollmentSignature10']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature10').text(o['enrollmentSignature10']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature10'));
			}
			if(vars.includes('enrollmentDate1')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate1').val(o['enrollmentDate1']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate1').text(o['enrollmentDate1']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate1'));
			}
			if(vars.includes('enrollmentDate2')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate2').val(o['enrollmentDate2']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate2').text(o['enrollmentDate2']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate2'));
			}
			if(vars.includes('enrollmentDate3')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate3').val(o['enrollmentDate3']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate3').text(o['enrollmentDate3']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate3'));
			}
			if(vars.includes('enrollmentDate4')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate4').val(o['enrollmentDate4']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate4').text(o['enrollmentDate4']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate4'));
			}
			if(vars.includes('enrollmentDate5')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate5').val(o['enrollmentDate5']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate5').text(o['enrollmentDate5']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate5'));
			}
			if(vars.includes('enrollmentDate6')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate6').val(o['enrollmentDate6']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate6').text(o['enrollmentDate6']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate6'));
			}
			if(vars.includes('enrollmentDate7')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate7').val(o['enrollmentDate7']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate7').text(o['enrollmentDate7']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate7'));
			}
			if(vars.includes('enrollmentDate8')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate8').val(o['enrollmentDate8']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate8').text(o['enrollmentDate8']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate8'));
			}
			if(vars.includes('enrollmentDate9')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate9').val(o['enrollmentDate9']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate9').text(o['enrollmentDate9']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate9'));
			}
			if(vars.includes('enrollmentDate10')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate10').val(o['enrollmentDate10']);
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate10').text(o['enrollmentDate10']);
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate10'));
			}
		});
	}
}
