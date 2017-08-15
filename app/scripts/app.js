import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import autosize from 'autosize';

$(() => {
	svg4everybody();

	// авторасширение textarea при добавлении строк
	(() => {
		const textarea = document.getElementById('about-textarea');
		if (textarea && typeof autosize !== 'function') {
			return;
		}
		autosize(textarea);
	})();
});
